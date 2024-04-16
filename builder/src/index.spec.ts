import { describe, expect, test } from "@jest/globals";
import { MyJiaoZiBuilder } from "./index";

describe("Builder Pattern", () => {
  test("works", () => {
    // build and test a product
    const builder = new MyJiaoZiBuilder();
    let product = builder.getJiaoZi();
    expect(product.fillings.length).toBe(0);
    expect(product.cookStyle).toBe("raw");

    builder.addFilling("pork");
    builder.addFilling("spring onion");
    builder.setCookStyle("steamed");
    product = builder.getJiaoZi();
    expect(product.fillings.length).toBe(2);
    expect(product.fillings[0]).toBe("pork");
    expect(product.fillings[1]).toBe("spring onion");
    expect(product.cookStyle).toBe("steamed");

    // build and test another
    builder.addFilling("shrimp");
    builder.addFilling("pork");
    builder.addFilling("garlic chives")
    builder.addFilling("chinese cabbage");
    builder.setCookStyle("fried");
    product = builder.getJiaoZi();
    expect(product.fillings.length).toBe(4);
    expect(product.fillings[0]).toBe("shrimp");
    expect(product.fillings[1]).toBe("pork");
    expect(product.fillings[2]).toBe("garlic chives");
    expect(product.fillings[3]).toBe("chinese cabbage");
    expect(product.cookStyle).toBe("fried");
  });
});
