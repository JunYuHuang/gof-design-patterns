import { describe, expect, test } from "@jest/globals";
import { RemoteControl, TV, Radio } from "./index";

describe("Bridge Pattern", () => {
  test("works with a concrete implementation", () => {
    const tv0 = new TV();
    const remote = new RemoteControl(tv0);
    expect(tv0.name()).toBe("TV");
    expect(tv0.isActive()).toBe(false);
    expect(tv0.volume()).toBe(20);

    remote.togglePower();
    expect(tv0.isActive()).toBe(true);

    remote.downVolume();
    expect(tv0.volume()).toBe(10);
    remote.downVolume();
    expect(tv0.volume()).toBe(0);
    remote.downVolume();
    expect(tv0.volume()).toBe(0);

    remote.upVolume();
    expect(tv0.volume()).toBe(10);
    remote.upVolume();
    expect(tv0.volume()).toBe(20);
    remote.upVolume();
    expect(tv0.volume()).toBe(30);
    remote.upVolume();
    expect(tv0.volume()).toBe(40);
    remote.upVolume();
    expect(tv0.volume()).toBe(50);
    remote.upVolume();
    expect(tv0.volume()).toBe(60);
    remote.upVolume();
    expect(tv0.volume()).toBe(70);
    remote.upVolume();
    expect(tv0.volume()).toBe(80);
    remote.upVolume();
    expect(tv0.volume()).toBe(90);
    remote.upVolume();
    expect(tv0.volume()).toBe(100);
    remote.upVolume();
    expect(tv0.volume()).toBe(100);

    remote.togglePower();
    expect(tv0.isActive()).toBe(false);
  });

  test("works with another concrete implementation", () => {
    const radio = new Radio();
    const remote = new RemoteControl(radio);
    expect(radio.name()).toBe("Radio");
    expect(radio.isActive()).toBe(false);
    expect(radio.volume()).toBe(30);

    remote.togglePower();
    expect(radio.isActive()).toBe(true);

    remote.downVolume();
    expect(radio.volume()).toBe(20);
    remote.downVolume();
    expect(radio.volume()).toBe(10);
    remote.downVolume();
    expect(radio.volume()).toBe(0);
    remote.downVolume();
    expect(radio.volume()).toBe(0);

    remote.upVolume();
    expect(radio.volume()).toBe(10);
    remote.upVolume();
    expect(radio.volume()).toBe(20);
    remote.upVolume();
    expect(radio.volume()).toBe(30);
    remote.upVolume();
    expect(radio.volume()).toBe(40);
    remote.upVolume();
    expect(radio.volume()).toBe(50);
    remote.upVolume();
    expect(radio.volume()).toBe(60);
    remote.upVolume();
    expect(radio.volume()).toBe(70);
    remote.upVolume();
    expect(radio.volume()).toBe(80);
    remote.upVolume();
    expect(radio.volume()).toBe(90);
    remote.upVolume();
    expect(radio.volume()).toBe(90);
    remote.upVolume();
    expect(radio.volume()).toBe(90);

    remote.togglePower();
    expect(radio.isActive()).toBe(false);
  });
});
