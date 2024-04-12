import { describe, expect, test } from "@jest/globals";
import {
  RoundPeg,
  SquarePeg,
  SquarePegToRoundPegAdapter,
  RoundHole
} from "./index";

describe("Adapter Pattern", () => {
  test("works", () => {
    // set up
    const roundHole = new RoundHole(5);
    const smallRoundPeg = new RoundPeg(4);
    const exactRoundPeg = new RoundPeg(5);
    const bigRoundPeg = new RoundPeg(6);
    const smallSquarePeg = new SquarePeg(6);
    const bigSquarePeg = new SquarePeg(8);
    const smallSquarePegToRoundPegAdapter =
      new SquarePegToRoundPegAdapter(smallSquarePeg);
    const bigSquarePegToRoundPegAdapter =
      new SquarePegToRoundPegAdapter(bigSquarePeg);


    // test with only round pegs
    expect(roundHole.doesPegFit(smallRoundPeg)).toBe(true);
    expect(roundHole.doesPegFit(exactRoundPeg)).toBe(true);
    expect(roundHole.doesPegFit(bigRoundPeg)).toBe(false);

    // test with only square pegs via adapter
    expect(
      roundHole.doesPegFit(smallSquarePegToRoundPegAdapter)
    ).toBe(true);
    expect(
      roundHole.doesPegFit(bigSquarePegToRoundPegAdapter)
    ).toBe(false);
  })
});
