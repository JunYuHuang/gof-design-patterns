import { describe, expect, test } from "@jest/globals";
import { AudioPlayer } from "./index";

describe("State Pattern", () => {
  test("works", () => {
    // globals
    const READY = "ReadyState";
    const LOCKED = "LockedState";
    const PLAYING = "PlayingState";

    // ready
    const player = new AudioPlayer();
    expect(player.state().name).toBe(READY);
    expect(player.isPlaying()).toBe(false);

    // ready -> locked
    player.lock();
    expect(player.state().name).toBe(LOCKED);
    expect(player.isPlaying()).toBe(false);

    // locked -> locked
    player.play();
    expect(player.state().name).toBe(LOCKED);
    expect(player.isPlaying()).toBe(false);

    // locked -> ready
    player.lock();
    expect(player.state().name).toBe(READY);
    expect(player.isPlaying()).toBe(false);

    // ready -> playing
    player.play();
    expect(player.state().name).toBe(PLAYING);
    expect(player.isPlaying()).toBe(true);

    // playing -> locked
    player.lock();
    expect(player.state().name).toBe(LOCKED);
    expect(player.isPlaying()).toBe(true);

    // locked -> locked
    player.play();
    expect(player.state().name).toBe(LOCKED);
    expect(player.isPlaying()).toBe(true);

    // locked -> playing
    player.lock();
    expect(player.state().name).toBe(PLAYING);
    expect(player.isPlaying()).toBe(true);

    // playing -> ready
    player.play();
    expect(player.state().name).toBe(READY);
    expect(player.isPlaying()).toBe(false);
  });
});
