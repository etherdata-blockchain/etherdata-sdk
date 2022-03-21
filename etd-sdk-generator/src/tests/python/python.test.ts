import { PythonGenerator } from "../../sdk-generator/generators/python_generator";
import { Param } from "../../sdk-generator/interfaces/schema";

describe("Given a python sdk generator", () => {
  let generator: PythonGenerator;

  beforeEach(() => {
    generator = new PythonGenerator();
  });

  describe("When testing generated rpc method params should equal to input params", () => {
    const params: Param[] = [
      {
        name: "testParam1",
        description: "",
        type: "string",
        optional: false,
      },
      {
        name: "testParam2",
        description: "",
        type: "number",
        optional: true,
      },
      {
        name: "testParam3",
        description: "",
        type: "boolean",
        optional: false,
      },
    ];

    test("Should equal", () => {
      const inputParams = generator.generateInputTypes(params);
      const rpcParams = generator.generateRpcMethodParams(params);
      expect(inputParams.code).toBe(
        "test_param1:str, test_param2:Optional[float], test_param3:bool"
      );
      expect(rpcParams).toBe("[test_param1, test_param2, test_param3]");
    });

    test("Should equal", () => {
      const inputParams = generator.generateInputTypes([]);
      const rpcParams = generator.generateRpcMethodParams([]);
      expect(inputParams.code).toBe("");
      expect(rpcParams).toBe("None");
    });
  });
});
