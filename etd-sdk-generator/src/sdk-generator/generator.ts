import fs from "fs";
import {
  RPCFunction,
  Method,
  Param,
  Return,
  Variable,
  AcceptedType,
} from "./interfaces/schema";
import yml from "js-yaml";
import { Validator } from "jsonschema";
import path from "path";
import nunjucks from "nunjucks";
import { Type } from "ajv/dist/compile/util";

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export abstract class Generator {
  protected fileList: string[] = [];
  protected schemaPath?: string;
  protected methods?: Method[];
  // Output extension name
  protected abstract extension: string;
  protected abstract functionTemplatePath: string;
  protected abstract methodTemplatePath: string;
  protected abstract libraryTemplatePath: string;

  protected validate(filename: string): [boolean, Method] {
    // Read schema
    const schema = this.getSchema();
    const data = this.getYmlFile(filename);
    const validator = new Validator();
    //TODO: Add validation
    // const valid = validator.validate(data, schema, {base: "https://etherdata-blockchain.github.io/etherdata-sdk/"})
    return [true, data];
  }

  /**
   * Read schema from file
   */
  protected getSchema(): any {
    if (!this.schemaPath) {
      throw new Error("Schema path not set");
    }
    const appDir = path.resolve(__dirname);
    const schema = fs.readFileSync(path.join(appDir, this.schemaPath), "utf8");
    return JSON.parse(schema);
  }

  // Read yml file from disk
  protected getYmlFile(filename: string): Method {
    const appDir = path.resolve(__dirname);
    const ymlPath = path.join(appDir, filename);

    const data = yml.load(fs.readFileSync(ymlPath, "utf8")) as Method;
    return data;
  }

  /**
   * Read file from file list and get the parsed data from it
   */
  read(filenames: string[]): Generator {
    let methods: Method[] = [];
    for (let filename of filenames) {
      const [isValid, method] = this.validate(filename);
      if (!isValid) {
        throw new Error(`${filename} is not valid`);
      }
      methods.push(method);
    }
    this.methods = methods;

    return this;
  }

  /**
   * Generate code to {outputFolder} path
   * @param outputFolder Output folder path
   */
  public async toCode(outputFolder: string) {
    if (!this.methods) {
      throw new Error("Methods are not set");
    }
    // App root dir
    const appDir = path.resolve(__dirname);

    for (let method of this.methods) {
      const filename = method.title + "." + this.extension;
      console.log(`Generating file ${filename}`);
      const code = this.methodToCode(method);
      // Generate beautiful code
      let prettyCode = this.beautify(code);
      // Output path
      const outputPath = path.join(appDir, outputFolder, filename);
      fs.writeFileSync(outputPath, prettyCode);
      const isvalidated = await this.validateGeneratedCode(prettyCode);
      if (!isvalidated) {
        throw new Error(`Generated ${filename} is not valid`);
      }
      this.fileList.push(filename);
    }
    let headerFile = path.join(appDir, outputFolder, `index.${this.extension}`);
    // Write header content to file
    fs.writeFileSync(headerFile, this.generateLibHeader(this.methods));
  }

  /**
   * Read template from filePath
   * @param filePath Template path
   * @returns Parsed template
   */
  protected getTemplate(filePath: string): nunjucks.Template {
    const appDir = path.resolve(__dirname);
    const templateFile = fs.readFileSync(path.join(appDir, filePath), "utf-8");
    const template = nunjucks.compile(templateFile);
    return template;
  }

  /**
   * Generate library file. For example, in typescript it is called index.ts.
   * And for python library, it is called __init__.py file.
   * @param methods RPC Method
   */
  protected abstract generateLibHeader(methods: Method[]): string;

  /**
   * Format the code
   * @param code Input Code
   */
  protected abstract beautify(code: string): string;

  /**
   * Generate code from RPC Method
   * @param method RPC Method
   * @returns Generated code
   */
  protected methodToCode(method: Method): string {
    const appDir = path.resolve(__dirname);
    const template = this.getTemplate(this.methodTemplatePath);

    const methodComment = this.generateComment(undefined, method);

    let functions = [];
    for (let func of method.functions) {
      const code = this.functionToCode(func);
      functions.push([func.name, code, func.rpc_method]);
    }
    return template.render({
      functions,
      methodName: capitalizeFirstLetter(method.title),
      methodComment,
    });
  }

  /**
   * Generate code for function
   */
  protected functionToCode(rpcFunction: RPCFunction): string {
    const template = this.getTemplate(this.functionTemplatePath);
    const functionComment = this.generateComment(rpcFunction, undefined);
    const functionInputTypes = this.generateInputTypes(rpcFunction.params);
    const functionReturnTypes = this.generateReturnType(rpcFunction.returns);
    const functionBody = this.generateFunctionBody(rpcFunction);

    const code = template.render({
      functionComment,
      functionInputTypes,
      functionReturnTypes,
      functionBody,
      functionName: rpcFunction.name.replace("-", "").replace(" ", ""),
      rpcMethodName: rpcFunction.rpc_method,
    });
    return code;
  }

  /**
   * Validate language syntax by given code
   * @param code Input Code
   * @returns validation status
   */
  protected abstract validateGeneratedCode(code: string): Promise<boolean>;

  /**
   * Generate comment for rpc method or rpc function. Should provide exactly one parameter.
   * @param func RPC Function's name
   * @param method RPC Method
   */
  protected abstract generateComment(
    func: RPCFunction | undefined,
    method: Method | undefined
  ): string;

  /**
   * Generate variable with type. For example, this will output a: number in typescript.
   * @param variable Variable with type
   */
  protected abstract generateVariable(variable: Variable): string;

  /**
   * Generate return types for function
   * @param returns Return variables
   */
  protected abstract generateReturnType(returns: Return[]): string;

  /**
   * Generate params for rpc method calls
   * @param params Input Params
   */
  protected abstract generateRpcMethodParams(params: Param[]): string;

  /**
   * Generate representation for arrays
   * @param variable Array type variable
   */
  protected abstract generateArrayType(variable: Variable): string;

  /**
   * Generate representation for object type variable
   * @param variable Object type variable
   */
  protected abstract generateObjectType(variable: Variable): string;

  /**
   * Generate function input parameters
   * @param params Input parameters
   */
  protected abstract generateInputTypes(params: Param[]): string;

  /**
   * Generate function body
   * @param rpcFunction RPC Function
   */
  protected abstract generateFunctionBody(rpcFunction: RPCFunction): string;

  /**
   * Generate code for variable based on its type
   * @param variable Variable
   */
  protected abstract generateType(variable: Variable): string;
}
