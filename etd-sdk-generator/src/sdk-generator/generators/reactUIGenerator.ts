import { capitalizeFirstLetter, Generator } from "../generator";
import {
  Method,
  RPCFunction,
  Variable,
  Return,
  Param,
} from "../interfaces/schema";
import prettier from "prettier";

export class ReactUIGenerator extends Generator {
  protected extension: string = "tsx";
  protected functionTemplatePath: string;
  protected methodTemplatePath: string;
  protected libraryTemplatePath: string;

  constructor() {
    super();
    this.functionTemplatePath = "templates/react/functionTemplate.j2";
    this.methodTemplatePath = "templates/react/methodTemplate.j2";
    this.libraryTemplatePath = "templates/react/libraryTemplate.j2";
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
  protected beautify(code: string): string {
    return prettier.format(code, {
      parser: "typescript",
      semi: true,
      quoteProps: "preserve",
    });
    // return code;
  }
  protected async validateGeneratedCode(code: string): Promise<boolean> {
    return true;
  }
  protected generateComment(func: RPCFunction, method: Method): string {
    return "";
  }
  protected generateVariable(variable: Variable): string | any {
    let code = {
      type: this.generateType(variable),
      title: variable.name,
    };

    return code;
  }
  protected generateReturnType(returns: Return[]): string {
    return "";
  }
  protected generateRpcMethodParams(params: Param[]): string | any {
    let code: { [key: string]: any; } = {};

    for (let param of params) {
      if (param.objectType) {
        code[param.name] = {
          type: "object",
          properties: this.generateRpcMethodParams(param.objectType)
        };
      } else if (param.arrayType) {
        code[param.name] = {
          type: "array",
          items: {
            type: param.arrayType,

          }
        };
      }

      else {
        code[param.name] = this.generateVariable(param);
      }
    }

    return code;
  }
  protected generateArrayType(variable: Variable): string {
    return "array";
  }
  protected generateObjectType(variable: Variable): string | any {
    return "object";
  }
  protected generateInputTypes(params: Param[]): string {
    let code: { [key: string]: string; } = {};

    return `${JSON.stringify(code)}`;
  }
  protected generateFunctionBody(rpcFunction: RPCFunction): string {
    let required: string[] = rpcFunction.params
      .filter((v) => v.optional === false)
      .map((p) => p.name);

    let code = {
      title: rpcFunction.name,
      description: rpcFunction.description,
      type: "object",
      properties: this.generateRpcMethodParams(rpcFunction.params),
      required: required,
    };

    return `
    let schema: any = ${JSON.stringify(code)}
    
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
        returnType = "string";
        break;
      case "void":
        returnType = "void";
        break;
      default:
        throw new Error(`Type ${type} not implemented.`);
    }

    return returnType;
  }
}
