import { describe, expect, test } from "@jest/globals";
import { Computer } from "./index";
const {
  Display,
  Mouse,
  Keyboard,
  Machine,
  MachineFacade
} = Computer;

describe("Facade Pattern", () => {
  test("works", () => {
    // set up
    const PC = new Machine();
    const devices = [
      new Display(), new Mouse(), new Keyboard()
    ]
    const display = devices[0] as Computer.OutputDevice;
    const mouse = devices[1] as Computer.InputDevice;
    const keyboard = devices[2] as Computer.InputDevice;
    const PCFacade = new MachineFacade(PC, devices);

    PCFacade.turnOn();
    expect(PC.isOn).toBe(true);
    expect(display.isActive).toBe(true);
    expect(mouse.isOn).toBe(true);
    expect(keyboard.isOn).toBe(true);

    PCFacade.turnOff();
    expect(PC.isOn).toBe(false);
    expect(display.isActive).toBe(false);
    expect(mouse.isOn).toBe(false);
    expect(keyboard.isOn).toBe(false);
  });
});
