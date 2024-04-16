import { describe, expect, test } from "@jest/globals";
import { BlockClient, Block, BlockTypeFactory } from "./index";

describe("Flyweight Pattern", () => {
  test("works", () => {
    // set up
    const client = new BlockClient(Block, BlockTypeFactory);
    expect(client.blocks.length).toBe(0);
    expect(BlockTypeFactory.blockTypes.size).toBe(0);

    // create a few flyweights of one type
    const blockArgs1 = { type: "dirt", variant: "snow" };
    client.spawnBlock({ ...blockArgs1, posX: 0, posY: 0 });
    client.spawnBlock({ ...blockArgs1, posX: 0, posY: 1 });
    client.spawnBlock({ ...blockArgs1, posX: 0, posY: 2 });
    client.spawnBlock({ ...blockArgs1, posX: 0, posY: 3 });
    client.spawnBlock({ ...blockArgs1, posX: 0, posY: 4 });
    const expectedRender1 = [
      "dirt,snow,0,0",
      "dirt,snow,0,1",
      "dirt,snow,0,2",
      "dirt,snow,0,3",
      "dirt,snow,0,4",
    ].join();
    expect(client.render()).toBe(expectedRender1);
    expect(BlockTypeFactory.blockTypes.size).toBe(1);
    expect(client.blocks.length).toBe(5);

    // create a few flyweights of another type
    const blockArgs2 = { type: "dirt", variant: "moss" };
    client.spawnBlock({ ...blockArgs2, posX: 1, posY: 0 });
    client.spawnBlock({ ...blockArgs2, posX: 1, posY: 1 });
    client.spawnBlock({ ...blockArgs2, posX: 1, posY: 2 });
    client.spawnBlock({ ...blockArgs2, posX: 1, posY: 3 });
    client.spawnBlock({ ...blockArgs2, posX: 1, posY: 4 });
    const expectedRender2 = [
      "dirt,snow,0,0",
      "dirt,snow,0,1",
      "dirt,snow,0,2",
      "dirt,snow,0,3",
      "dirt,snow,0,4",
      "dirt,moss,1,0",
      "dirt,moss,1,1",
      "dirt,moss,1,2",
      "dirt,moss,1,3",
      "dirt,moss,1,4",
    ].join();
    expect(client.render()).toBe(expectedRender2);
    expect(BlockTypeFactory.blockTypes.size).toBe(2);
    expect(client.blocks.length).toBe(10);
  });
});
