import { describe, expect, test } from "@jest/globals";
import { LinkedList, Node } from "./index";

describe("Iterator Pattern", () => {
  test("works with an empty collection", () => {
    const list = new LinkedList([]);
    const listIterator = list.createIterator();

    expect(listIterator.atEnd()).toBe(true);
    expect(listIterator.next()).toBe(null);
    expect(listIterator.atEnd()).toBe(true);
    expect(listIterator.next()).toBe(null);
    expect(listIterator.atEnd()).toBe(true);
  });

  test("works with a 1-sized collection", () => {
    const list = new LinkedList([1]);
    const listIterator = list.createIterator();

    expect(listIterator.atEnd()).toBe(false);
    expect((listIterator.next() as Node).value).toBe(1);
    expect(listIterator.atEnd()).toBe(true);
    expect(listIterator.next()).toBe(null);
    expect(listIterator.atEnd()).toBe(true);
    expect(listIterator.next()).toBe(null);
    expect(listIterator.atEnd()).toBe(true);
  });

  test("works with a 3-sized collection", () => {
    const list = new LinkedList([1, 2, 3]);
    const listIterator = list.createIterator();

    expect(listIterator.atEnd()).toBe(false);
    expect((listIterator.next() as Node).value).toBe(1);
    expect(listIterator.atEnd()).toBe(false);
    expect((listIterator.next() as Node).value).toBe(2);
    expect(listIterator.atEnd()).toBe(false);
    expect((listIterator.next() as Node).value).toBe(3);
    expect(listIterator.atEnd()).toBe(true);
    expect(listIterator.next()).toBe(null);
    expect(listIterator.atEnd()).toBe(true);
    expect(listIterator.next()).toBe(null);
    expect(listIterator.atEnd()).toBe(true);
  });
});
