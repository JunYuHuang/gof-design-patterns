import { describe, expect, test } from "@jest/globals";
import { NaturalNumberToEmoji } from "./index";

const { Program } = NaturalNumberToEmoji;

describe("Interpreter Pattern", () => {
  test("works with invalid numbers", () => {
    const program = new Program();

    let res = program.interpret(NaN);
    expect(res).toBe("");

    res = program.interpret(4.20);
    expect(res).toBe("💥");

    res = program.interpret(-69);
    expect(res).toBe("💥");
  });

  test("works with valid numbers", () => {
    const program = new Program();

    let res = program.interpret(123);
    expect(res).toBe("1️⃣2️⃣3️⃣");

    res = program.interpret(456);
    expect(res).toBe("4️⃣5️⃣6️⃣");

    res = program.interpret(789);
    expect(res).toBe("7️⃣8️⃣9️⃣");

    res = program.interpret(0);
    expect(res).toBe("0️⃣");
  });
});
