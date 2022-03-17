import {
  cleanPythonVariableName,
  generatePythonFunctionBodyReturn,
} from "../../sdk-generator/utils/python_utils";

describe("Given a generateFunctionBody", () => {
  test("When generating reserved keyword", () => {
    const result = generatePythonFunctionBodyReturn("Any", "response.json()");
    expect(result).toBe("response.json()");
  });

  test("When generating List of reserved keyword", () => {
    const result = generatePythonFunctionBodyReturn(
      "List[Any]",
      "response.json()"
    );
    expect(result).toBe("response.json()");
  });

  test("When generating List", () => {
    const result = generatePythonFunctionBodyReturn(
      "List[Custom]",
      "response.json()"
    );
    expect(result).toBe("Custom.schema().load(response.json(), many=True)");
  });
});

describe("Given a cleanPythonKeyword", () => {
  test("When cleaning a non-keyword", () => {
    const result = cleanPythonVariableName("hello");
    expect(result.cleanVariableName).toBe("hello");
  });

  test("When cleaning a keyword", () => {
    const result = cleanPythonVariableName("from");
    expect(result.cleanVariableName).toBe("from_field");
  });
});
