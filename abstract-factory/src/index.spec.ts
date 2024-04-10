import { describe, expect, test } from "@jest/globals";
import {
  GUIFactory, WindowsGUIFactory, WebGUIFactory
} from "./index";

describe("Abstract Factory Pattern", () => {
  test("works", () => {
    let factory: GUIFactory;
    let button;
    let checkbox;

    factory = new WindowsGUIFactory();
    button = factory.createButton();
    checkbox = factory.createCheckbox();
    expect(button.render()).toBe("Windows Button");
    expect(checkbox.render()).toBe("Windows Checkbox");

    factory = new WebGUIFactory();
    button = factory.createButton();
    checkbox = factory.createCheckbox();
    expect(button.render()).toBe("Web Button");
    expect(checkbox.render()).toBe("Web Checkbox");
  });
});
