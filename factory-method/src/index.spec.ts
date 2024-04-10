import { describe, expect, test } from "@jest/globals";
import { Dialog, WindowsDialog, WebDialog } from "./index";

describe("Factory Method Pattern", () => {
  test("works", () => {
    let dialog: Dialog;

    dialog = new WindowsDialog();
    expect(dialog.render()).toStrictEqual("Windows Button");

    dialog = new WebDialog();
    expect(dialog.render()).toStrictEqual("Web Button");
  });
});
