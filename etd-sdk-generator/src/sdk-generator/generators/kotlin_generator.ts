import { TypescriptGenerator } from "./typescript_generator";
import {
  Method,
  Param,
  Return,
  RPCFunction,
  Variable,
} from "../interfaces/schema";
import { TypeResult } from "../interfaces/generator_interface";

import { exec } from "child_process";
import { capitalizeFirstLetter, lowercaseFirstLetter } from "../utils/filters";

export class KotlinGenerator extends TypescriptGenerator {
  functionTemplatePath = "templates/kotlin/functionTemplate.j2";
  methodTemplatePath = "templates/kotlin/methodTemplate.j2";
  libraryTemplatePath = "templates/kotlin/libraryTemplate.j2";
  schemaPath = "../../../schema.json";
  extension = "kt";

  generateType(
    variable: Variable,
    prevResults: TypeResult[] = [],
    functionReturnTypeName: string | undefined = undefined
  ): TypeResult {
    let returnType = "";
    let isCustomType = false;
    if (variable === undefined) {
      return { isCustomType, type: "Void", types: [] };
    }
    let code: string | undefined = undefined;
    const { type, optional } = variable;
    //Deep copy of prev results
    let types: TypeResult[] = JSON.parse(JSON.stringify(prevResults));

    switch (type) {
      case "string":
        returnType = "String";
        break;
      case "number":
        returnType = "Long";
        break;
      case "boolean":
        returnType = "Boolean";
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
        returnType = "Any";
        break;
      case "void":
        returnType = "Void";
        break;
      default:
        throw new Error(`Type ${type} not implemented.`);
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
      returnCode = "(";
      for (let ret of returns) {
        const { isCustomType, type, types, code } = this.generateType(
          ret,
          [],
          returnTypeName
        );
        returnCode += `val ${ret.name}:${type}`;
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
      returnCode += ")";
    } else if (returns.length === 1) {
      const result = this.generateType(returns[0], returnTypes, returnTypeName);
      returnValues = result.type;
      isCustomType = result.isCustomType;
      returnTypes = result.types;
      returnCode = result.code;
    } else {
      returnValues = "Void";
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

  protected generateLibHeader(methods: Method[]): string | undefined {
    return undefined;
  }

  protected generateObjectType(
    objectTypeName: string,
    variable: Variable,
    prevResults: TypeResult[],
    functionReturnTypeName: string | undefined
  ): TypeResult {
    let code = "(";
    let types: TypeResult[] = JSON.parse(JSON.stringify(prevResults));
    let index = 0;
    for (let property of variable.objectType!) {
      const result = this.generateType(property, types, functionReturnTypeName);
      code += `val ${property.name}:${result.type}`;
      types = types.concat(result.types);

      if (index < variable.objectType!.length - 1) {
        code += ",";
      }
      index++;
    }

    code += ")";
    return {
      isCustomType: true,
      types: types,
      type: `${functionReturnTypeName ?? ""}${capitalizeFirstLetter(
        objectTypeName
      )}`,
      code: code,
    };
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
      type: `List<${type}>`,
      types: types,
    };
  }

  protected generateRpcMethodParams(params: Param[]): string {
    let returnParams = "listOf";
    if (params.length === 0) {
      returnParams += "()";
    } else {
      returnParams += "(";
      let index = 0;
      for (let param of params) {
        returnParams += `${lowercaseFirstLetter(param.name)}`;
        if (index < params.length - 1) {
          returnParams += ", ";
        }
        index++;
      }

      returnParams += ")";
    }
    return returnParams;
  }

  protected generateFunctionBody(
    rpcFunction: RPCFunction,
    returnTypeName: string
  ): string {
    return `
    val response: JsonRpcResponse<${returnTypeName}> = client.post(url){
        contentType(ContentType.Application.Json)
        body = JsonRpcRequest(method =  "${
          rpcFunction.rpc_method
        }", params = ${this.generateRpcMethodParams(
      rpcFunction.params
    )}, jsonrpc = "2.0", id = 1 )
    }
    return response.result
        `;
  }

  protected beautify(code: string): string {
    return code;
  }

  protected async validateGeneratedCode(code: string): Promise<boolean> {
    return true;
  }

  protected async beautifyByExternalTool(outputFilePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      exec(`java -jar ktfmt.jar ${outputFilePath}`, (error, stdout) => {
        if (error) {
          reject(error);
        }
        resolve(undefined);
      });
    });
  }
}
