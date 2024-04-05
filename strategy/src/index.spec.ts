import { describe, expect, test } from "@jest/globals";
import { sum } from "./index";

describe("sum function", () => {
  test("calling sum with values (1, 2, 3) returns 6", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
