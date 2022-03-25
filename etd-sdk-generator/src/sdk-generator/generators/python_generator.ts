import {
  Method,
  Param,
  Return,
  RPCFunction,
  Variable,
} from "../interfaces/schema";
import {
  InputParamResult,
  TypeResult,
} from "../interfaces/generator_interface";
import { with_indentation } from "../utils/with_indentation";
import { TypescriptGenerator } from "./typescript_generator";
import {
  cleanPythonVariableName,
  generatePythonFunctionBodyReturn,
} from "../utils/python_utils";

import { exec } from "child_process";
import {
  capitalizeFirstLetter,
  ensureSnakeCaseFilter,
  lowercaseFirstLetter,
} from "../utils/filters";

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

  generateInputTypes(params: Param[]): InputParamResult {
    let code = "";
    let index = 0;
    let types: TypeResult[] = [];
    for (let param of params) {
      const result = this.generateType(param);
      code += `${cleanPythonVariableName(
        ensureSnakeCaseFilter(param.name)
      ).cleanVariableName.toLowerCase()}:${result.type}`;
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

  generateComment(
    func?: RPCFunction | undefined,
    method?: Method | undefined,
    inputTypes?: InputParamResult,
    returnType?: TypeResult
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
      // Add parameter header
      if (func.params.length > 0) returnComment += "#### Arguments\n\n";
      for (let line of func.params) {
        returnComment += `${lowercaseFirstLetter(
          line.name
        )}: ${line.description.replace("/", "")}\n`;
      }
      // Add returns header
      if (func.returns.length > 0)
        returnComment += `#### Returns ${
          returnType?.isCustomType ? `#${returnType.type}` : ""
        } \n\n`;
      for (let line of func.returns) {
        returnComment += `${lowercaseFirstLetter(
          line.name
        )}: ${line.description.replace("/", "")}\n`;
      }
    }
    returnComment += `"""`;
    return returnComment;
  }

  generateVariable(variable: Variable): string {
    let code = "";
    const result = this.generateType(variable);
    code = `${cleanPythonVariableName(variable.name).cleanVariableName}:${
      result.type
    } ${cleanPythonVariableName(variable.name).alternativeName}`;
    return code;
  }

  generateRpcMethodParams(params: Param[]): string {
    let returnParams = "";
    if (params.length === 0) {
      returnParams = "None";
    } else {
      returnParams += "[";
      let index = 0;
      for (let param of params) {
        returnParams += `${ensureSnakeCaseFilter(
          cleanPythonVariableName(lowercaseFirstLetter(param.name))
            .cleanVariableName
        )}`;
        if (index < params.length - 1) {
          returnParams += ", ";
        }
        index++;
      }

      returnParams += "]";
    }
    return returnParams;
  }

  protected async validateGeneratedCode(code: string): Promise<boolean> {
    return true;
  }

  protected beautify(code: string): string {
    return code;
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
      code += with_indentation(
        `${cleanPythonVariableName(property.name).cleanVariableName}:${
          result.type
        } ${cleanPythonVariableName(property.name).alternativeName}\n`,
        4
      );
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
    json_data = {
      "method": "${rpcFunction.rpc_method}",
      "params": ${this.generateRpcMethodParams(rpcFunction.params)},
      "jsonrpc": "2.0",
      "id": 1
    }
    response = requests.post(self.url, json=to_dict(json_data))
    error = response.json().get("error")
    if error:
        raise RPCException(error["message"])
    return ${generatePythonFunctionBodyReturn(
      returnTypeName,
      `response.json()["result"]`
    )}
    `;
  }

  protected generateReturnTypeName(functionName: string): string {
    return `${capitalizeFirstLetter(functionName)}Response`;
  }

  protected async beautifyByExternalTool(outputFilePath: string): Promise<any> {
    exec(`autopep8 --in-place --aggressive --aggressive ${outputFilePath}`);
  }
}
