import {
  capitalizeFirstLetter,
  lowercaseFirstLetter,
} from "../sdk-generator/generator";

describe("Given a string test capitalize first letter", () => {
  test("When the string starts with a capital letter", () => {
    const ret = capitalizeFirstLetter("HelloWorld");
    expect(ret).toBe("HelloWorld");
  });

  test("When the string starts with a lowercase letter", () => {
    const ret = capitalizeFirstLetter("helloWorld");
    expect(ret).toBe("HelloWorld");
  });
});

describe("Given a string test lower the first letter", () => {
  test("When only the first letter is upper case", () => {
    const ret = lowercaseFirstLetter("Hello");
    expect(ret).toBe("hello");
  });

  test("When all letters are upper case", () => {
    const ret = lowercaseFirstLetter("HELLO");
    expect(ret).toBe("hello");
  });
});
