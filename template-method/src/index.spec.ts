import { describe, expect, test } from "@jest/globals";
import { RiceBento, NoodleBento } from "./index";

describe("Template Method Pattern", () => {
  test("works", () => {
    const riceBento = new RiceBento();
    riceBento.make();
    expect(riceBento.carb).toBe("white rice");
    expect(riceBento.protein).toBe("smoked salmon");
    expect(riceBento.vegetable).toBe("broccoli");
    expect(riceBento.condiments.length).toBe(0);

    const noodleBento = new NoodleBento();
    noodleBento.make();
    expect(noodleBento.carb).toBe("ramen noodles");
    expect(noodleBento.protein).toBe("braised beef");
    expect(noodleBento.vegetable).toBe("bok choy");
    expect(noodleBento.condiments.length).toBe(2);
    expect(noodleBento.condiments[0]).toBe("soy sauce");
    expect(noodleBento.condiments[1]).toBe("teriyaki sauce");
  });
});
