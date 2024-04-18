import { describe, expect, test } from "@jest/globals";
import { Shape, Rectangle, Circle } from "./index";

describe("Prototype Pattern", () => {
  test("works for a concrete prototype class", () => {
    // set up & sanity tests
    const rectangle1 = new Rectangle();
    rectangle1.x = 1;
    rectangle1.y = 1;
    rectangle1.color = "red";
    rectangle1.width = 5;
    rectangle1.height = 5;
    expect(rectangle1).toBe(rectangle1);
    expect(rectangle1 instanceof Shape).toBe(true);
    expect(rectangle1 instanceof Rectangle).toBe(true);
    expect(rectangle1 instanceof Circle).toBe(false);

    // tests
    const rectangle1Clone = rectangle1.clone();
    expect(rectangle1Clone instanceof Shape).toBe(true);
    expect(rectangle1Clone instanceof Rectangle).toBe(true);
    expect(rectangle1Clone instanceof Circle).toBe(false);
    expect(rectangle1Clone).not.toBe(rectangle1);
    expect(rectangle1Clone.x).toBe(1);
    expect(rectangle1Clone.y).toBe(1);
    expect(rectangle1Clone.color).toBe("red");
    expect(rectangle1Clone.width).toBe(5);
    expect(rectangle1Clone.height).toBe(5);
  });

  test("works for another concrete prototype class", () => {
    // set up & sanity tests
    const circle1 = new Circle();
    circle1.x = 2;
    circle1.y = 2;
    circle1.color = "green";
    circle1.radius = 3;
    expect(circle1).toBe(circle1);
    expect(circle1 instanceof Shape).toBe(true);
    expect(circle1 instanceof Circle).toBe(true);
    expect(circle1 instanceof Rectangle).toBe(false);

    // tests
    const circle1Clone = circle1.clone();
    expect(circle1Clone instanceof Shape).toBe(true);
    expect(circle1Clone instanceof Circle).toBe(true);
    expect(circle1Clone instanceof Rectangle).toBe(false);
    expect(circle1Clone).not.toBe(circle1);
    expect(circle1Clone.x).toBe(2);
    expect(circle1Clone.y).toBe(2);
    expect(circle1Clone.color).toBe("green");
    expect(circle1Clone.radius).toBe(3);
  });
});
