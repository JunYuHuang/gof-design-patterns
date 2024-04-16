import { describe, expect, test } from "@jest/globals";
import {
  StringRequest,
  UnknownStringHandler,
  TrimStringHandler,
  ToLowerCaseStringHandler,
  ToUpperCaseStringHandler
} from "./index";

describe("Chain Of Responsibility Pattern", () => {
  test("works", () => {
    // set up chain: trim -> lower -> upper -> unknown
    const trimHandler = new TrimStringHandler();
    const lowerHandler = new ToLowerCaseStringHandler();
    const upperHandler = new ToUpperCaseStringHandler();
    const unknownHandler = new UnknownStringHandler();
    trimHandler.setNextHandler(lowerHandler);
    lowerHandler.setNextHandler(upperHandler);
    upperHandler.setNextHandler(unknownHandler);

    // test trim handler
    const trimRequest = new StringRequest(
      " o g a   booga   ", "trim"
    );
    expect(trimHandler.handle(trimRequest)).toBe("o g a   booga");

    // test lower handler
    const lowerRequest = new StringRequest(
      " BIG Chungus ", "lowercase"
    );
    expect(trimHandler.handle(lowerRequest)).toBe(" big chungus ");

    // test upper handler
    const upperRequest = new StringRequest(
      " BIG Chungus ", "uppercase"
    );
    expect(trimHandler.handle(upperRequest)).toBe(" BIG CHUNGUS ");

    // test unknown handler
    const unknownRequest = new StringRequest(
      " BIG Chungus ", "grug"
    );
    expect(trimHandler.handle(unknownRequest)).toBe(" BIG Chungus ");
  });
});
