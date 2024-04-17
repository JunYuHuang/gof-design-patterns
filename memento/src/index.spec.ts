import { describe, expect, test } from "@jest/globals";
import { NoteApp, SnapshotHandler } from "./index";

describe("Memento Pattern", () => {
  test("works", () => {
    // set up
    const noteApp = new NoteApp();
    const snapshotHandler = new SnapshotHandler(noteApp);

    // test undo when no saves exist
    expect(noteApp.text()).toBe("");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("");

    // test undo after updating app when no saves exist
    noteApp.setText("hello");
    expect(noteApp.text()).toBe("hello");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("hello");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("hello");

    // test undo after updating app when 1 save exists
    snapshotHandler.save();
    noteApp.setText("hello world");
    expect(noteApp.text()).toBe("hello world");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("hello");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("hello");

    // test undo with multiple saves
    noteApp.setText("hel");
    snapshotHandler.save();
    noteApp.setText("hello");
    snapshotHandler.save();
    noteApp.setText("hello wor");
    snapshotHandler.save();
    noteApp.setText("hello world");
    snapshotHandler.save();
    expect(noteApp.text()).toBe("hello world");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("hello world");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("hello wor");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("hello");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("hel");
    snapshotHandler.undo();
    expect(noteApp.text()).toBe("hel");
  });
});
