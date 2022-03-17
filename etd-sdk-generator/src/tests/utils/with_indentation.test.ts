import { with_indentation } from "../../sdk-generator/utils/with_indentation";

describe("Given a with indentation util", () => {
  test("When indentation is 0", () => {
    const result = with_indentation("hello", 0);
    expect(result).toBe("hello");
  });

  test("When indentation is 1", () => {
    const result = with_indentation("hello", 1);
    expect(result).toBe(" hello");
  });

  test("When indentation is 1", () => {
    const result = with_indentation("hello", 2);
    expect(result).toBe("  hello");
  });

  test("When text is empty and indentation is 0", () => {
    const result = with_indentation("", 0);
    expect(result).toBe("");
  });

  test("When text is empty and indentation is 1", () => {
    const result = with_indentation("", 1);
    expect(result).toBe(" ");
  });

  test("When text is empty and indentation is 2", () => {
    const result = with_indentation("", 2);
    expect(result).toBe("  ");
  });

  test("When indentation is 2 and align left", () => {
    const result = with_indentation("hello world\nHello bye!", 2, {
      multilineAlignLeft: true,
    });
    expect(result).toBe("  hello world\n  Hello bye!");
  });

  test("When indentation is 2 and align left and first line is empty", () => {
    const result = with_indentation("\nhello world\nHello bye!", 2, {
      multilineAlignLeft: true,
    });
    expect(result).toBe("  \n  hello world\n  Hello bye!");
  });

  test("When indentation is 0 and align left", () => {
    const result = with_indentation("hello world\nHello bye!", 0, {
      multilineAlignLeft: true,
    });
    expect(result).toBe("hello world\nHello bye!");
  });
});
