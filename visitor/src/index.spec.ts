import { describe, expect, test } from "@jest/globals";
import {
  Circle, Rectangle, AreaVisitor, PerimeterVisitor
} from "./index";

describe("Visitor Pattern", () => {
  test("works", () => {
    // set up
    const circle1 = new Circle({ radius: 3 });
    const rectangle1 = new Rectangle({ width: 3, height: 5 });

    // test area visitor
    const area = new AreaVisitor();
    expect(circle1.accept(area)).toBe(
      Math.PI * Math.pow(circle1.radius, 2)
    );
    expect(rectangle1.accept(area)).toBe(15);

    // test perimeter visitor
    const perimeter = new PerimeterVisitor();
    expect(circle1.accept(perimeter)).toBe(
      2 * Math.PI * circle1.radius
    );
    expect(rectangle1.accept(perimeter)).toBe(16);
  });
});
