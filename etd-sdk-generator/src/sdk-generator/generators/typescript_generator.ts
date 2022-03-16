import {
  capitalizeFirstLetter,
  Generator,
  lowercaseFirstLetter,
} from "../generator";
import {
  Method,
  Param,
  Return,
  RPCFunction,
  Variable,
} from "../interfaces/schema";
import prettier from "prettier";
import { ESLint } from "eslint";
import {
  InputParamResult,
  TypeResult,
} from "../interfaces/generator_interface";

export class TypescriptGenerator extends Generator {
  schemaPath = "../../../schema.json";
  protected libraryFilename = "index";
  protected libraryTemplatePath = "templates/typescript/libraryTemplate.j2";
  protected extension = "ts";
  protected functionTemplatePath = "templates/typescript/functionTemplate.j2";
  protected methodTemplatePath = "templates/typescript/methodTemplate.j2";

  generateType(
    variable: Variable,
    prevResults: TypeResult[] = [],
    functionReturnTypeName: string | undefined = undefined
  ): TypeResult {
    let returnType = "";
    let isCustomType = false;
    if (variable === undefined) {
      return { isCustomType, type: "void", types: [] };
    }
    let code: string | undefined = undefined;
    const { type, optional } = variable;
    //Deep copy of prev results
    let types: TypeResult[] = JSON.parse(JSON.stringify(prevResults));

    switch (type) {
      case "string":
        returnType = "string";
        break;
      case "number":
        returnType = "number";
        break;
      case "boolean":
        returnType = "boolean";
        break;
      case "array":
        const arrayTypeResult = this.generateArrayType(
          variable.name,
          variable,
          prevResults,
          functionReturnTypeName
        );
        isCustomType = arrayTypeResult.isCustomType;
        types = types.concat(arrayTypeResult.types);
        returnType = arrayTypeResult.type;
        code = arrayTypeResult.code;
        break;
      case "object":
        const objectResult = this.generateObjectType(
          variable.name,
          variable,
          prevResults,
          functionReturnTypeName
        );
        isCustomType = objectResult.isCustomType;
        types = types.concat(objectResult.types);
        if (isCustomType) {
          types.push(objectResult);
        }
        returnType = objectResult.type;
        code = objectResult.code;
        break;
      case "any":
        returnType = "any";
        break;
      case "void":
        returnType = "void";
        break;
      default:
        throw new Error(`Type ${type} not implemented.`);
    }

    if (optional) {
      returnType += "|" + "undefined";
    }

    return {
      isCustomType,
      type: returnType,
      types: types,
      code: code,
    };
  }

  generateReturnType(returnTypeName: string, returns: Return[]): TypeResult {
    let returnValues = "";
    let isCustomType = true;
    let returnTypes: TypeResult[] = [];
    let returnCode: string | undefined = undefined;

    if (returns.length > 1) {
      returnValues = returnTypeName;
      returnCode = "{";
      for (let ret of returns) {
        const { isCustomType, type, types, code } = this.generateType(
          ret,
          [],
          returnTypeName
        );
        returnCode += `${ret.name}:${type}`;
        returnTypes = returnTypes.concat(types);

        if (isCustomType) {
          returnTypes.push({
            types: [],
            isCustomType: isCustomType,
            type: type,
            code: code,
          });
        }

        if (returns.length > 1) {
          returnCode += ", ";
        }
      }
      returnCode += "}";
    } else if (returns.length === 1) {
      const result = this.generateType(returns[0], returnTypes, returnTypeName);
      returnValues = result.type;
      isCustomType = result.isCustomType;
      returnTypes = result.types;
      returnCode = result.code;
    } else {
      returnValues = "void";
      isCustomType = false;
    }

    const uniqueTypes = returnTypes.filter(
      (t1, i) =>
        returnTypes.findIndex((t2) => t2.type === t1.type) === i &&
        !t1.type.endsWith("[]")
    );

    return {
      isCustomType: isCustomType,
      type: `${returnValues}`,
      types: uniqueTypes,
      code: returnCode,
    };
  }

  generateInputTypes(params: Param[]): InputParamResult {
    let code = "";
    let index = 0;
    let types: TypeResult[] = [];
    for (let param of params) {
      const result = this.generateType(param);
      code += `${lowercaseFirstLetter(param.name)}:${result.type}`;
      types = types.concat(result.types);

      if (result.isCustomType) {
        types.push({
          types: [],
          type: result.type,
          code: result.code,
          isCustomType: true,
        });
      }

      if (index < params.length - 1) {
        code += ", ";
      }
      index++;
    }

    const uniqueTypes = types.filter(
      (t1, i) => types.findIndex((t2) => t1.type === t2.type) === i
    );

    return {
      types: uniqueTypes,
      code: code,
    };
  }

  protected generateLibHeader(methods: Method[]): string | undefined {
    const template = this.getTemplate(this.libraryTemplatePath);
    let importPaths = [];
    let exportClassNames = [];

    for (let method of methods) {
      importPaths.push({
        path: `${method.title}`,
        className: capitalizeFirstLetter(method.title),
      });
      exportClassNames.push(capitalizeFirstLetter(method.title));
    }

    return template.render({
      importPaths,
      exportClassNames,
    });
  }

  protected async validateGeneratedCode(code: string): Promise<boolean> {
    const eslint = new ESLint();
    const result = await eslint.lintText(code);
    return result[0].errorCount === 0;
  }

  protected beautify(code: string): string {
    return prettier.format(code, { parser: "typescript", semi: true });
  }

  protected generateComment(
    func: RPCFunction | undefined,
    method: Method | undefined
  ): string {
    let returnComment = "/**\n";
    let comment = "";
    if (func !== undefined) {
      comment = func.description;
    } else {
      comment = method!.description;
    }

    for (let line of comment.split(".")) {
      if (line.length > 0) {
        returnComment += `* ${line}\n`;
      }
    }

    if (func) {
      for (let line of func.params) {
        returnComment += `* @param ${lowercaseFirstLetter(
          line.name
        )} ${line.description.replace("/", "")}\n`;
      }

      for (let line of func.returns) {
        returnComment += `* @return ${lowercaseFirstLetter(
          line.name
        )} ${line.description.replace("/", "")}\n`;
      }
    }
    returnComment += "*/";
    return returnComment;
  }

  protected generateVariable(variable: Variable): string {
    let code = "";
    const result = this.generateType(variable);
    code = `${variable.name}:${result.type}`;
    return code;
  }

  protected generateRpcMethodParams(params: Param[]): string {
    let returnParams = "";
    if (params.length === 0) {
      returnParams = "undefined";
    } else {
      returnParams += "[";
      let index = 0;
      for (let param of params) {
        returnParams += `${lowercaseFirstLetter(param.name)}`;
        if (index < params.length - 1) {
          returnParams += ", ";
        }
        index++;
      }

      returnParams += "]";
    }
    return returnParams;
  }

  protected generateArrayType(
    objectTypeName: string,
    variable: Variable,
    prevResults: TypeResult[],
    functionReturnTypeName: string | undefined
  ): TypeResult {
    let arrayType: Variable = { ...variable, type: variable.arrayType! };
    const { isCustomType, type, types } = this.generateType(
      arrayType,
      prevResults
    );
    return {
      isCustomType: isCustomType,
      type: type + "[]",
      types: types,
    };
  }

  protected generateObjectType(
    objectTypeName: string,
    variable: Variable,
    prevResults: TypeResult[],
    functionReturnTypeName: string | undefined
  ): TypeResult {
    let code = "{";
    let types: TypeResult[] = JSON.parse(JSON.stringify(prevResults));
    let index = 0;
    for (let property of variable.objectType!) {
      const result = this.generateType(property, types, functionReturnTypeName);
      code += `${property.name}:${result.type}`;
      types = types.concat(result.types);

      if (index < variable.objectType!.length - 1) {
        code += ",";
      }
      index++;
    }

    code += "}";
    return {
      isCustomType: true,
      types: types,
      type: `${functionReturnTypeName ?? ""}${capitalizeFirstLetter(
        objectTypeName
      )}`,
      code: code,
    };
  }

  protected generateFunctionBody(
    rpcFunction: RPCFunction,
    returnTypeName: string
  ): string {
    return `
        let response = await axios.post(this.url, {
          method: "${rpcFunction.rpc_method}",
          params: ${this.generateRpcMethodParams(rpcFunction.params)},
          jsonrpc: "2.0",
          id: 1
        });

        return response.data.result
        `;
  }

  protected generateReturnTypeName(functionName: string): string {
    return `${capitalizeFirstLetter(functionName)}Response`;
  }
}
