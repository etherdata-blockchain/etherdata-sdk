import { TypeScriptGenerator } from "../../sdk-generator/generators/typescriptGenerator";
import {
  Method,
  Param,
  Return,
  RPCFunction,
} from "../../sdk-generator/interfaces/schema";
import { MockDataRpcBalance, MockDataRpcMethod } from "../mockdata/const";
import { capitalizeFirstLetter } from "../../sdk-generator/generator";

describe("Given a typescript generator test returns", () => {
  let generator: TypeScriptGenerator;
  beforeEach(() => {
    generator = new TypeScriptGenerator();
  });

  test("When input a single string return type for function", () => {
    const returns: Return[] = [
      {
        description: "balance",
        name: "balance",
        optional: false,
        type: "string",
      },
    ];
    const result = generator.generateReturnType("myFunction", returns);
    expect(result.type).toBe("string");
    expect(result.types.length).toBe(0);
    expect(result.isCustomType).toBe(false);
  });

  test("When input multiple return types for function", () => {
    const returns: Return[] = [
      {
        description: "username",
        name: "user",
        optional: false,
        type: "string",
      },
      {
        description: "balance",
        name: "balance",
        optional: false,
        type: "string",
      },
    ];
    const result = generator.generateReturnType("MyFunctionResponse", returns);
    expect(result.type).toBe("MyFunctionResponse");
    expect(result.types.length).toBe(0);
    expect(result.isCustomType).toBe(true);
  });

  test("When input multiple return object types for function", () => {
    const returns: Return[] = [
      {
        description: "user",
        name: "user",
        optional: false,
        type: "object",
        objectType: [
          {
            name: "username",
            description: "username",
            type: "string",
            optional: false,
          },
          {
            name: "birthday",
            description: "birthday",
            type: "string",
            optional: false,
          },
        ],
      },
      {
        description: "balance",
        name: "balance",
        optional: false,
        type: "object",
        objectType: [
          {
            name: "high",
            description: "high",
            type: "string",
            optional: false,
          },
        ],
      },
    ];
    const result = generator.generateReturnType("MyFunctionResponse", returns);
    expect(result.type).toBe("MyFunctionResponse");
    expect(result.types.length).toBe(2);
    expect(result.isCustomType).toBe(true);
  });

  test("When input multiple return array types for function", () => {
    const returns: Return[] = [
      {
        description: "user",
        name: "user",
        optional: false,
        type: "array",
        arrayType: "string",
      },
    ];
    const result = generator.generateReturnType("MyFunctionResponse", returns);
    expect(result.type).toBe("string[]");
    expect(result.types.length).toBe(0);
    expect(result.isCustomType).toBe(false);
  });

  test("When input multiple return array types for function", () => {
    const returns: Return[] = [
      {
        description: "user",
        name: "user",
        optional: false,
        type: "array",
        arrayType: "object",
        objectType: [
          {
            name: "username",
            description: "username",
            type: "string",
            optional: false,
          },
          {
            name: "birthday",
            description: "birthday",
            type: "string",
            optional: false,
          },
        ],
      },
      {
        description: "balance",
        name: "balance",
        optional: false,
        type: "object",
        objectType: [
          {
            name: "high",
            description: "high",
            type: "string",
            optional: false,
          },
        ],
      },
    ];
    const result = generator.generateReturnType("MyFunctionResponse", returns);
    expect(result.type).toBe("MyFunctionResponse");
    expect(result.types.length).toBe(2);
    expect(result.isCustomType).toBe(true);
    expect(result.types[0].type).toBe("User");
  });
});

describe("Given a typescript generator test input parameters to code", () => {
  let generator: TypeScriptGenerator;
  beforeEach(() => {
    generator = new TypeScriptGenerator();
  });

  test("When providing single input param", () => {
    const params: Param[] = [
      {
        description: "name",
        name: "name",
        optional: false,
        type: "string",
      },
    ];

    const result = generator.generateInputTypes(params);
    expect(result.types.length).toBe(0);
    expect(result.code).toBe("name:string");
  });

  test("When providing multiple parameters", () => {
    const params: Param[] = [
      {
        description: "name",
        name: "name",
        optional: false,
        type: "string",
      },
      {
        description: "balance",
        name: "balance",
        optional: false,
        type: "number",
      },
    ];

    const result = generator.generateInputTypes(params);
    expect(result.types.length).toBe(0);
    expect(result.code).toBe("name:string, balance:number");
  });

  test("When providing multiple parameters with custom types", () => {
    const params: Param[] = [
      {
        description: "user",
        name: "user",
        optional: false,
        type: "object",
        objectType: [
          {
            name: "username",
            description: "username",
            type: "string",
            optional: false,
          },
          {
            name: "password",
            description: "password",
            type: "string",
            optional: false,
          },
        ],
      },
      {
        description: "balance",
        name: "balance",
        optional: false,
        type: "number",
      },
    ];

    const result = generator.generateInputTypes(params);
    expect(result.types.length).toBe(1);
    expect(result.code).toBe("user:User, balance:number");
  });

  test("When providing multiple parameters with custom array types", () => {
    const params: Param[] = [
      {
        description: "user",
        name: "user",
        optional: false,
        type: "array",
        arrayType: "object",
        objectType: [
          {
            name: "username",
            description: "username",
            type: "string",
            optional: false,
          },
          {
            name: "password",
            description: "password",
            type: "string",
            optional: false,
          },
        ],
      },
      {
        description: "balance",
        name: "balance",
        optional: false,
        type: "number",
      },
    ];

    const result = generator.generateInputTypes(params);
    expect(result.types.length).toBe(2);
    expect(result.code).toBe("user:User[], balance:number");
  });
});

describe("Given a typescript generator test function to code", () => {
  let generator: TypeScriptGenerator;
  beforeEach(() => {
    generator = new TypeScriptGenerator();
  });

  test("When generating a simple function", () => {
    const rpcFunction: RPCFunction = {
      description: MockDataRpcBalance.functionDescription,
      name: MockDataRpcBalance.functionName,
      params: [
        {
          name: MockDataRpcBalance.parameterName,
          description: MockDataRpcBalance.parameterDescription,
          type: "string",
          optional: false,
        },
      ],
      returns: [
        {
          name: MockDataRpcBalance.returnName,
          description: MockDataRpcBalance.returnDescription,
          type: "string",
          optional: false,
        },
      ],
      rpc_method: MockDataRpcBalance.rpcMethodName,
    };
    const [context, _] = generator.functionToCode(rpcFunction);
    expect(context.functionName).toBe(MockDataRpcBalance.functionName);
    expect(context.functionComment).toContain(
      MockDataRpcBalance.functionDescription
    );
    expect(context.functionReturns).toBe("string");
    expect(context.functionInputs).toBe(
      `${MockDataRpcBalance.parameterName}:string`
    );
  });

  test("When generating a nested custom object function", () => {
    const rpcFunction: RPCFunction = {
      description: MockDataRpcBalance.functionDescription,
      name: MockDataRpcBalance.functionName,
      params: [
        {
          name: MockDataRpcBalance.parameterName,
          description: MockDataRpcBalance.parameterDescription,
          type: "string",
          optional: false,
        },
      ],
      returns: [
        {
          name: MockDataRpcBalance.returnName,
          description: MockDataRpcBalance.returnDescription,
          type: "object",
          optional: false,
          objectType: [
            {
              name: MockDataRpcBalance.returnName2,
              description: MockDataRpcBalance.returnDescription2,
              type: "object",
              optional: false,
              objectType: [
                {
                  name: MockDataRpcBalance.returnName3,
                  description: MockDataRpcBalance.returnDescription3,
                  type: "string",
                  optional: false,
                },
              ],
            },
          ],
        },
      ],
      rpc_method: MockDataRpcBalance.rpcMethodName,
    };
    const [context, code, types] = generator.functionToCode(rpcFunction);
    expect(types.length).toBe(2);
    expect(types[0].code?.length).toBeGreaterThan(0);
    expect(types[1].code?.length).toBeGreaterThan(0);
  });

  test("When generating a nested custom array function", () => {
    const rpcFunction: RPCFunction = {
      description: MockDataRpcBalance.functionDescription,
      name: MockDataRpcBalance.functionName,
      params: [
        {
          name: MockDataRpcBalance.parameterName,
          description: MockDataRpcBalance.parameterDescription,
          type: "string",
          optional: false,
        },
      ],
      returns: [
        {
          name: MockDataRpcBalance.returnName,
          description: MockDataRpcBalance.returnDescription,
          type: "array",
          arrayType: "object",
          optional: false,
          objectType: [
            {
              name: MockDataRpcBalance.returnName2,
              description: MockDataRpcBalance.returnDescription2,
              type: "object",
              optional: false,
              objectType: [
                {
                  name: MockDataRpcBalance.returnName3,
                  description: MockDataRpcBalance.returnDescription3,
                  type: "string",
                  optional: false,
                },
              ],
            },
          ],
        },
      ],
      rpc_method: MockDataRpcBalance.rpcMethodName,
    };
    const [context, code, types] = generator.functionToCode(rpcFunction);
    expect(types.length).toBe(3);
  });
});

describe("Given a typescript generator test method to code", () => {
  let generator: TypeScriptGenerator;
  beforeEach(() => {
    generator = new TypeScriptGenerator();
  });

  test("When generating an simple method", () => {
    const rpcFunction: RPCFunction = {
      description: MockDataRpcBalance.functionDescription,
      name: MockDataRpcBalance.functionName,
      params: [
        {
          name: MockDataRpcBalance.parameterName,
          description: MockDataRpcBalance.parameterDescription,
          type: "string",
          optional: false,
        },
      ],
      returns: [
        {
          name: MockDataRpcBalance.returnName,
          description: MockDataRpcBalance.returnDescription,
          type: "string",
          optional: false,
        },
      ],
      rpc_method: MockDataRpcBalance.rpcMethodName,
    };
    const rpcMethod: Method = {
      description: MockDataRpcMethod.methodDescription,
      functions: [rpcFunction],
      title: MockDataRpcMethod.methodName,
    };
    const [context, _] = generator.methodToCode(rpcMethod);
    expect(context.methodName).toBe(
      capitalizeFirstLetter(MockDataRpcMethod.methodName)
    );
    expect(context.methodComment).toContain(rpcMethod.description);
    expect(context.functions.length).toBe(1);
    expect(context.functionReturnTypes.length).toBe(0);
  });

  test("When generating an simple method with custom return", () => {
    const rpcFunction: RPCFunction = {
      description: MockDataRpcBalance.functionDescription,
      name: MockDataRpcBalance.functionName,
      params: [
        {
          name: MockDataRpcBalance.parameterName,
          description: MockDataRpcBalance.parameterDescription,
          type: "string",
          optional: false,
        },
      ],
      returns: [
        {
          name: MockDataRpcBalance.returnName,
          description: MockDataRpcBalance.returnDescription,
          type: "object",
          objectType: [
            {
              name: MockDataRpcBalance.returnName,
              description: MockDataRpcBalance.returnDescription,
              type: "string",
              optional: false,
            },
          ],
          optional: false,
        },
      ],
      rpc_method: MockDataRpcBalance.rpcMethodName,
    };
    const rpcMethod: Method = {
      description: MockDataRpcMethod.methodDescription,
      functions: [rpcFunction],
      title: MockDataRpcMethod.methodName,
    };
    const [context, _] = generator.methodToCode(rpcMethod);
    expect(context.methodName).toBe(
      capitalizeFirstLetter(MockDataRpcMethod.methodName)
    );
    expect(context.methodComment).toContain(rpcMethod.description);
    expect(context.functions.length).toBe(1);
    expect(context.functionReturnTypes.length).toBe(1);
  });
});
