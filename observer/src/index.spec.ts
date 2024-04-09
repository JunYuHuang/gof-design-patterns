import { describe, expect, test } from "@jest/globals";
import { GameEventManager, GameClient } from "./index";

describe("Observer Pattern", () => {
  test("works", () => {
    // setup
    const gameEventManager = new GameEventManager();
    const gameClient1 = new GameClient("noobie");
    const gameClient2 = new GameClient("progamer");

    // test `notify()` with 1 listener
    gameEventManager.addListener(gameClient1);
    gameEventManager.notify("Game started!");
    expect(
      gameClient1.loggedGameEvents().length
    ).toStrictEqual(1);
    expect(
      gameClient2.loggedGameEvents().length
    ).toStrictEqual(0);

    // test `notify()` with 2 listeners
    gameEventManager.addListener(gameClient2);
    gameEventManager.notify("A player joined!");
    expect(
      gameClient1.loggedGameEvents().length
    ).toStrictEqual(2);
    expect(
      gameClient2.loggedGameEvents().length
    ).toStrictEqual(1);

    // test `notify()` with 1 listener
    gameEventManager.removeListener(gameClient2.id);
    gameEventManager.notify("A player left!");
    expect(
      gameClient1.loggedGameEvents().length
    ).toStrictEqual(3);
    expect(
      gameClient2.loggedGameEvents().length
    ).toStrictEqual(1);
  });
});
