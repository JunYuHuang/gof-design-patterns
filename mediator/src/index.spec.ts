import { describe, expect, test } from "@jest/globals";
import { Chat } from "./index";

const { Room, User } = Chat;

describe("Mediator Pattern", () => {
  test("works", () => {
    // setup
    const room = new Room();
    const bain = new User("bain", room);
    const dallas = new User("dallas", room);
    const houston = new User("houston", room);
    room.addUser(bain);
    room.addUser(dallas);
    room.addUser(houston);
    expect(room.allMessages.length).toBe(0);

    // test sending messages to existing users
    bain.send("dallas", "Guys, the thermal drill. Go get it!");
    bain.send("houston", "Guys, the thermal drill. Go get it!");
    expect(room.allMessages.length).toBe(2);
    expect(dallas.takenMessages.length).toBe(1);
    expect(houston.takenMessages.length).toBe(1);

    // test sending a message to a non-existing user
    houston.send("civilian1", "DONACDUM");
    expect(room.allMessages.length).toBe(2);
  });
});
