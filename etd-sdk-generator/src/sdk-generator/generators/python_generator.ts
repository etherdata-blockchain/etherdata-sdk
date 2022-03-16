import { capitalizeFirstLetter, lowercaseFirstLetter } from "../generator";
import {
  Method,
  Param,
  Return,
  RPCFunction,
  Variable,
} from "../interfaces/schema";
import { TypeResult } from "../interfaces/generator_interface";
import { with_indentation } from "../utils/with_indentation";
import { TypescriptGenerator } from "./typescript_generator";

export class PythonGenerator extends TypescriptGenerator {
  functionTemplatePath = "templates/python/functionTemplate.j2";
  methodTemplatePath = "templates/python/methodTemplate.j2";
  libraryTemplatePath = "templates/python/libraryTemplate.j2";
  schemaPath = "../../../schema.json";
  libraryFilename = "__init__";
  protected extension = "py";

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
        returnType = "str";
        break;
      case "number":
        returnType = "float";
        break;
      case "boolean":
        returnType = "bool";
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
        returnType = "None";
        break;
      default:
        throw new Error(`Type ${type} not implemented.`);
    }

    if (optional) {
      returnType = `Optional[${returnType}]`;
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
      returnCode = "\n";
      for (let ret of returns) {
        const { isCustomType, type, types, code } = this.generateType(
          ret,
          [],
          returnTypeName
        );
        returnCode += with_indentation(`${ret.name}:${type}`, 4);
        returnCode += with_indentation(`\n"""\n${ret.description}\n"""\n`, 4, {
          multilineAlignLeft: true,
        });
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
          returnCode += "\n";
        }
      }
    } else if (returns.length === 1) {
      const result = this.generateType(returns[0], returnTypes, returnTypeName);
      returnValues = result.type;
      isCustomType = result.isCustomType;
      returnTypes = result.types;
      returnCode = result.code;
    } else {
      returnValues = "None";
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

  protected async validateGeneratedCode(code: string): Promise<boolean> {
    return true;
  }

  protected beautify(code: string): string {
    return code;
  }

  protected generateComment(
    func: RPCFunction | undefined,
    method: Method | undefined
  ): string {
    let returnComment = `"""\n`;
    let comment = "";
    if (func !== undefined) {
      comment = func.description;
    } else {
      comment = method!.description;
    }

    for (let line of comment.split(".")) {
      if (line.length > 0) {
        returnComment += `${line}\n`;
      }
    }

    if (func) {
      for (let line of func.params) {
        returnComment += `:param ${lowercaseFirstLetter(
          line.name
        )}: ${line.description.replace("/", "")}\n`;
      }

      for (let line of func.returns) {
        returnComment += `:return ${lowercaseFirstLetter(
          line.name
        )}: ${line.description.replace("/", "")}\n`;
      }
    }
    returnComment += `"""`;
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
      returnParams = "None";
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
      type: `List[${type}]`,
      types: types,
    };
  }

  protected generateObjectType(
    objectTypeName: string,
    variable: Variable,
    prevResults: TypeResult[],
    functionReturnTypeName: string | undefined
  ): TypeResult {
    let code = "\n";
    let types: TypeResult[] = JSON.parse(JSON.stringify(prevResults));
    let index = 0;
    for (let property of variable.objectType!) {
      const result = this.generateType(property, types, functionReturnTypeName);
      code += with_indentation(`${property.name} : ${result.type}\n`, 4);
      code += with_indentation(`"""\n${property.description}\n"""`, 4, {
        multilineAlignLeft: true,
      });
      types = types.concat(result.types);

      if (index < variable.objectType!.length - 1) {
        code += "\n\n";
      }
      index++;
    }

    code += "";
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
    response = requests.post(self.url, data={
      "method": "${rpcFunction.rpc_method}",
      "params": ${this.generateRpcMethodParams(rpcFunction.params)},
      "jsonrpc": "2.0",
      "id": 1
    })
    return response.json()
    `;
  }

  protected generateReturnTypeName(functionName: string): string {
    return `${capitalizeFirstLetter(functionName)}Response`;
  }
}
