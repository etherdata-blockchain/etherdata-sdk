import {
  ensureCamelCaseFilter,
  ensureSnakeCaseFilter,
} from "../../sdk-generator/utils/filters";

describe("Given a camel case filter", () => {
  test("When input is in camel case", () => {
    expect(ensureCamelCaseFilter("helloWorld")).toBe("helloWorld");
  });

  test("When input is in snake case", () => {
    expect(ensureCamelCaseFilter("hello_world")).toBe("helloWorld");
  });

  test("When input has space", () => {
    expect(ensureCamelCaseFilter("hello world")).toBe("helloWorld");
  });

  test("When input has spaces", () => {
    expect(ensureCamelCaseFilter("hello  world")).toBe("helloWorld");
  });

  test("When input has spaces", () => {
    expect(ensureCamelCaseFilter("HelloWorld")).toBe("helloWorld");
  });
});

describe("Given a snake case filter", () => {
  test("When input is in camel case", () => {
    expect(ensureSnakeCaseFilter("helloWorld")).toBe("hello_world");
  });

  test("When input is in snake case", () => {
    expect(ensureSnakeCaseFilter("hello_world")).toBe("hello_world");
  });

  test("When input has spaces ", () => {
    expect(ensureSnakeCaseFilter("hello world")).toBe("hello_world");
  });

  test("When input has spaces", () => {
    expect(ensureSnakeCaseFilter("hello  world")).toBe("hello_world");
  });
});
