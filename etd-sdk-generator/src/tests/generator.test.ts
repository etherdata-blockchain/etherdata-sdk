import { capitalizeFirstLetter } from "../sdk-generator/generator";

describe("Given a string", () => {
  test("When the string starts with a capital letter", () => {
    const ret = capitalizeFirstLetter("HelloWorld");
    expect(ret).toBe("HelloWorld");
  });

  test("When the string starts with a lowercase letter", () => {
    const ret = capitalizeFirstLetter("helloWorld");
    expect(ret).toBe("HelloWorld");
  });
});
