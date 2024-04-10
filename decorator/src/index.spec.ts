import { describe, expect, test } from "@jest/globals";
import {
  BasicCoffee, MilkCoffee, WhipCoffee, VanillaCoffee
} from "./index";

describe("Decorator Pattern", () => {
  test("works", () => {
    let coffee = new BasicCoffee();
    expect(coffee.cost()).toStrictEqual(8);
    expect(coffee.traits().length).toStrictEqual(1);

    coffee = new MilkCoffee(coffee);
    expect(coffee.cost()).toStrictEqual(11);
    expect(coffee.traits().length).toStrictEqual(2);

    coffee = new WhipCoffee(coffee);
    expect(coffee.cost()).toStrictEqual(16);
    expect(coffee.traits().length).toStrictEqual(3);

    coffee = new VanillaCoffee(coffee);
    expect(coffee.cost()).toStrictEqual(20);
    expect(coffee.traits().length).toStrictEqual(4);
  });
});
