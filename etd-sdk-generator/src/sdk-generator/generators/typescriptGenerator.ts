import { capitalizeFirstLetter, Generator } from "../generator";
import {
  RPCFunction,
  Variable,
  Return,
  Param,
  AcceptedType,
  Method,
} from "../interfaces/schema";
import prettier from "prettier";
import { ESLint } from "eslint";
import path from "path";
import fs from "fs";
import nunjucks from "nunjucks";

export class TypeScriptGenerator extends Generator {
  protected libraryTemplatePath: string;
  protected extension: string = "ts";
  protected functionTemplatePath: string;
  protected methodTemplatePath: string;

  constructor() {
    super();
    this.functionTemplatePath = "templates/typescript/functionTemplate.j2";
    this.methodTemplatePath = "templates/typescript/methodTemplate.j2";
    this.libraryTemplatePath = "templates/typescript/libraryTemplate.j2";
    this.schemaPath = "../../../schema.json";
  }

  protected generateLibHeader(methods: Method[]): string {
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
        returnComment += `* @param ${line.name} ${line.description.replace(
          "/",
          ""
        )}\n`;
      }

      for (let line of func.returns) {
        returnComment += `* @return ${line.name} ${line.description.replace(
          "/",
          ""
        )}\n`;
      }
    }
    returnComment += "*/";
    return returnComment;
  }

  protected generateVariable(variable: Variable): string {
    let code = "";
    code = `${variable.name}:${this.generateType(variable)}`;
    return code;
  }

  protected generateReturnType(returns: Return[]): string {
    let returnValues = "";
    if (returns.length > 1) {
      returnValues = "[";
      for (let ret of returns) {
        returnValues += `${this.generateType(ret)}`;
        if (returns.length > 1) {
          returnValues += ", ";
        }
      }
      returnValues += "]";
    } else if (returns.length === 1) {
      returnValues = this.generateType(returns[0]);
    } else {
      returnValues = "void";
    }

    return `Promise<${returnValues}>`;
  }

  protected generateRpcMethodParams(params: Param[]): string {
    let returnParams = "";
    if (params.length === 0) {
      returnParams = "undefined";
    } else {
      returnParams += "[";
      let index = 0;
      for (let param of params) {
        returnParams += `${param.name}`;
        if (index < params.length - 1) {
          returnParams += ", ";
        }
        index++;
      }

      returnParams += "]";
    }
    return returnParams;
  }

  protected generateArrayType(variable: Variable): string {
    let returnType = "";
    let arrayType: Variable = { ...variable, type: variable.arrayType! };
    returnType = this.generateType(arrayType) + "[]";
    return returnType;
  }

  protected generateObjectType(variable: Variable): string {
    let returnType = "{";
    let index = 0;
    for (let property of variable.objectType!) {
      returnType += `${property.name}:${this.generateType(property)}`;
      if (index < variable.objectType!.length - 1) {
        returnType += ",";
      }
      index++;
    }

    returnType += "}";
    return returnType;
  }

  protected generateInputTypes(params: Param[]): string {
    let inputTypes = "";
    let index = 0;
    for (let param of params) {
      inputTypes += `${param.name}:${this.generateType(param)}`;

      if (index < params.length - 1) {
        inputTypes += ", ";
      }
      index++;
    }

    return inputTypes;
  }

  protected generateFunctionBody(rpcFunction: RPCFunction): string {
    return `
         return await this.client.request({ method: "${
           rpcFunction.rpc_method
         }", params: ${this.generateRpcMethodParams(rpcFunction.params)} });
        `;
  }

  protected generateType(variable: Variable): string {
    let returnType = "";
    if (variable === undefined) {
      return "void";
    }
    const { type, optional } = variable;

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
        returnType = this.generateArrayType(variable);
        break;
      case "object":
        returnType = this.generateObjectType(variable);
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

    return returnType;
  }
}
