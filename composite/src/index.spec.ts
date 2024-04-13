import { describe, expect, test } from "@jest/globals";
import { Product, Box } from "./index";

describe("Composite Pattern", () => {
  test("works for a tree with 1 leaf", () => {
    const root = new Product(1);
    const dummyProduct = new Product(2);
    expect(root.cost()).toBe(1);

    // should do nothing b/c `root` is a leaf component
    root.add(dummyProduct);
    expect(root.cost()).toBe(1);

    // should do nothing b/c `root` is a leaf component
    root.remove(dummyProduct);
    expect(root.cost()).toBe(1);

    expect(root.children().length).toBe(0);
  });

  test("works for a tree with 1 composite with 0 children", () => {
    const root = new Box(1);
    expect(root.cost()).toBe(1);
  });

  test("works for a tree with 3 components that loses a component", () => {
    const root = new Box(1);
    const product1 = new Product(2);
    const product2 = new Product(3);
    root.add(product1);
    root.add(product2);
    expect(root.cost()).toBe(6);
    expect(root.children().length).toBe(2);

    root.remove(product1);
    expect(root.cost()).toBe(4);
    expect(root.children().length).toBe(1);
  });

  test("works for a tree with 6 components", () => {
    const root = new Box(0);
    const product1 = new Product(1);
    const box2 = new Box(2);
    const box3 = new Box(3);
    const product2 = new Product(4);
    const product3 = new Product(5);
    root.add(product1);
    root.add(box2);
    root.add(box3);
    box2.add(product2);
    box3.add(product3);

    expect(root.cost()).toBe(15);
    expect(root.children().length).toBe(3);
    expect(box2.children().length).toBe(1);
    expect(box3.children().length).toBe(1);
  });
});
