import { describe, expect, test } from "@jest/globals";
import {
  AddMathOperationStrategy,
  SubtractMathOperationStrategy,
  MultiplyMathOperationStrategy,
  DivideMathOperationStrategy,
  MathOperation
} from "./index";

describe("Strategy Pattern", () => {
  test("works", () => {
    // test add
    const mathOperation = new MathOperation(
      new AddMathOperationStrategy()
    );
    const sum = mathOperation.runStrategy(2, 3);
    expect(sum).toStrictEqual(5);

    // test subtract
    mathOperation.setStrategy(
      new SubtractMathOperationStrategy()
    );
    const difference = mathOperation.runStrategy(0, 6);
    expect(difference).toStrictEqual(-6);

    // test multiply
    mathOperation.setStrategy(
      new MultiplyMathOperationStrategy()
    );
    const product = mathOperation.runStrategy(4, 2);
    expect(product).toStrictEqual(8);

    // test divide
    mathOperation.setStrategy(
      new DivideMathOperationStrategy()
    );
    const quotient = mathOperation.runStrategy(6, 3);
    expect(quotient).toStrictEqual(2);
  });
});
