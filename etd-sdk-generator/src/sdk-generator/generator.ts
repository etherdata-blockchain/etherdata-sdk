import fs from "fs";
import {
  Method,
  Param,
  Return,
  RPCFunction,
  Variable,
} from "./interfaces/schema";
import yml from "js-yaml";
import { Validator } from "jsonschema";
import path from "path";
import nunjucks from "nunjucks";
import {
  FunctionToCodeContext,
  InputParamResult,
  MethodToCodeContext,
  TypeResult,
} from "./interfaces/generator_interface";

/**
 * Given a string, will return to capitalize version of the string.
 * For example, given hello-world, will return Hello-world
 * @param string
 */
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Given a string, will return to lower the first letter of the string.
 * For example, given Hello-world, will return hello-world.
 * If all letters are uppercase, then it will lower all letters.
 * @param string
 */
export function lowercaseFirstLetter(string: string) {
  const re = new RegExp(/[A-Z]*/);
  const result = re.exec(string);
  if (result) {
    const item = result[0];
    if (item.length === string.length) {
      return string.toLowerCase();
    }
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export abstract class Generator {
  /**
   * List of schema files
   * @protected
   */
  protected fileList: string[] = [];
  /**
   * Schema.json path for validation purpose
   * @protected
   */
  protected schemaPath?: string;
  /**
   * JSON RPC methods
   * @protected
   */
  protected methods?: Method[];
  /**
   * Output extension name. For example ts for typescript file
   * @protected
   */
  protected abstract extension: string;
  /**
   * Template file path for function
   * @protected
   */
  protected abstract functionTemplatePath: string;
  /**
   * Template file path for method
   * @protected
   */
  protected abstract methodTemplatePath: string;
  /**
   * Template file path for library
   * @protected
   */
  protected abstract libraryTemplatePath: string;

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
      const [_, code] = this.methodToCode(method);
      // Generate beautiful code
      let prettyCode = this.beautify(code);
      // Output path
      const outputPath = path.join(appDir, outputFolder, filename);
      fs.writeFileSync(outputPath, prettyCode);
      const isValid = await this.validateGeneratedCode(prettyCode);
      if (!isValid) {
        throw new Error(`Generated ${filename} is not valid`);
      }
      this.fileList.push(filename);
    }
    let headerFile = path.join(appDir, outputFolder, `index.${this.extension}`);
    // Write header content to file
    const libHeader = this.generateLibHeader(this.methods);
    if (libHeader) {
      fs.writeFileSync(headerFile, libHeader);
    }
  }

  /**
   * Generate return types for function.
   * In most cases, we will define a custom type at the begining of the file.
   * For example,
   * ```typescript
   * export interface ReturnType{
   *     name: string;
   *     value: string
   * }
   * ```
   * @param returns Return variables
   * @param returnTypeName The name of the return type
   * @return boolean, string Is custom type, and Generated code
   */
  abstract generateReturnType(
    returnTypeName: string,
    returns: Return[]
  ): TypeResult;

  /**
   * Generate code for variable based on its type
   * @param prevReturnTypes Variable
   * @param variable
   * @param functionReturnTypeName
   */
  abstract generateType(
    variable: Variable,
    prevReturnTypes: TypeResult[],
    functionReturnTypeName: string | undefined
  ): TypeResult;

  /**
   * Generate function input parameters
   * @param params Input parameters
   */
  abstract generateInputTypes(params: Param[]): InputParamResult;

  /**
   * Generate code from RPC Method
   * @param method RPC Method
   * @returns Generated code
   */
  methodToCode(method: Method): [MethodToCodeContext, string] {
    const appDir = path.resolve(__dirname);
    const template = this.getTemplate(this.methodTemplatePath);

    const methodComment = this.generateComment(undefined, method);
    let functionReturnTypes: TypeResult[] = [];

    let functions = [];
    for (let func of method.functions) {
      const [_, code, types] = this.functionToCode(func);
      functions.push([func.name, code, func.rpc_method]);
      functionReturnTypes = functionReturnTypes.concat(types);
    }

    const uniqueTypes = functionReturnTypes.filter(
      (t1, i) =>
        functionReturnTypes.findIndex((t2) => t1.type === t2.type) === i
    );

    const context: MethodToCodeContext = {
      functionReturnTypes: uniqueTypes,
      functions: functions,
      methodComment: methodComment,
      methodName: capitalizeFirstLetter(method.title),
    };

    return [context, template.render(context)];
  }

  /**
   * Generate code for function
   *
   * @return function code and function return type
   */
  functionToCode(
    rpcFunction: RPCFunction
  ): [FunctionToCodeContext, string, TypeResult[]] {
    const template = this.getTemplate(this.functionTemplatePath);
    const functionComment = this.generateComment(rpcFunction, undefined);
    const functionInputTypes = this.generateInputTypes(rpcFunction.params);
    const functionReturnTypeName = this.generateReturnTypeName(
      rpcFunction.name
    );
    const functionReturnType = this.generateReturnType(
      functionReturnTypeName,
      rpcFunction.returns
    );
    let types: TypeResult[] = [];

    types = types.concat(functionInputTypes.types);
    types = types.concat(functionReturnType.types);

    if (functionReturnType.isCustomType) {
      types.push({
        isCustomType: true,
        type: functionReturnType.type,
        types: [],
        code: functionReturnType.code,
      });
    }

    const functionBody = this.generateFunctionBody(
      rpcFunction,
      functionReturnType.type
    );

    const uniqueTypes = types.filter(
      (t1, i) => types.findIndex((t2) => t2.type === t1.type) === i && t1.code
    );

    const context: FunctionToCodeContext = {
      functionBody: functionBody,
      functionComment: functionComment,
      functionInputs: functionInputTypes.code,
      functionName: rpcFunction.name.replace("-", "").replace(" ", ""),
      functionReturns: functionReturnType.type,
      functionRpcMethod: rpcFunction.rpc_method,
    };

    const code = template.render(context);
    return [context, code, uniqueTypes];
  }

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
  protected abstract generateLibHeader(methods: Method[]): string | undefined;

  /**
   * Format the code
   * @param code Input Code
   */
  protected abstract beautify(code: string): string;

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
   * Generate the name of the return
   * @param functionName function name.
   *
   * Given a function
   * ```typescript
   * function someFunction(){
   *
   * }
   *
   * ```
   *
   * Will generate a return type name like `SomeFunctionResponse`
   * @protected
   */
  protected abstract generateReturnTypeName(functionName: string): string;

  /**
   * Generate params for rpc method calls
   * @param params Input Params
   */
  protected abstract generateRpcMethodParams(params: Param[]): string;

  /**
   * Generate representation for arrays
   * @param objectTypeName
   * @param variable Array type variable
   * @param prevResults
   * @param functionReturnTypeName
   * @returns isCustomObject, typeCode
   */
  protected abstract generateArrayType(
    objectTypeName: string,
    variable: Variable,
    prevResults: TypeResult[],
    functionReturnTypeName: string | undefined
  ): TypeResult;

  /**
   * Generate representation for object type variable
   * @param objectTypeName
   * @param variable Object type variable
   * @param prevResults
   * @param functionReturnTypeName
   */
  protected abstract generateObjectType(
    objectTypeName: string,
    variable: Variable,
    prevResults: TypeResult[],
    functionReturnTypeName: string | undefined
  ): TypeResult;

  /**
   * Generate function body
   * @param rpcFunction RPC Function
   * @param returnTypeName
   */
  protected abstract generateFunctionBody(
    rpcFunction: RPCFunction,
    returnTypeName: string
  ): string;
}
