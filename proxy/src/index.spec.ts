import { describe, expect, test } from "@jest/globals";
import { MyHashmap, MyHashmapLogger } from "./index";

describe("Proxy Pattern", () => {
  test("works", () => {
    const hashmap = new MyHashmap();
    const hashmapProxy = new MyHashmapLogger(hashmap);

    expect(hashmapProxy.get("abc")).toBe(null);
    expect(hashmap.get("abc")).toBe(null);
    expect(hashmapProxy.logs().length).toBe(1);
    expect(hashmapProxy.logs()[0]).toBe("get('abc') returned 'null'");

    hashmapProxy.set("green", "is a colour");
    expect(hashmapProxy.logs().length).toBe(2);
    expect(hashmapProxy.logs()[1]).toBe("set('green', 'is a colour') called");

    expect(hashmapProxy.get("green")).toBe("is a colour");
    expect(hashmapProxy.logs().length).toBe(3);
    expect(hashmapProxy.logs()[2]).toBe("get('green') returned 'is a colour'");
    expect(hashmap.get("green")).toBe("is a colour");
  });
});
