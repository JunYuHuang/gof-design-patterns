import { describe, expect, test } from "@jest/globals";
import { TextEditor } from "./index";

const {
  App, SetTextCommand, ClearTextCommand, UndoCommand
} = TextEditor;

describe("Command Pattern", () => {
  test("works", () => {
    // setup
    const app = new App();
    let baseCommandArgs = {
      needs: {
        app: app,
        handler: app.handler,
      }
    }
    const clearTextCommand = new ClearTextCommand(baseCommandArgs);
    const undoCommand = new UndoCommand(baseCommandArgs);

    // test `SetText` command
    app.executeCommand(new SetTextCommand({
      ...baseCommandArgs,
      payload: {
        text: "A"
      }
    }));
    expect(app.renderText()).toBe("A");

    // test `ClearText` command
    app.executeCommand(clearTextCommand);
    expect(app.renderText()).toBe("");

    // test queuing and running queued commands
    app.queueCommand(new SetTextCommand(baseCommandArgs));
    app.queueCommand(
      new SetTextCommand({
        ...baseCommandArgs,
        payload: {
          text: "AB"
        }
      })
    );
    app.queueCommand(
      new SetTextCommand({
        ...baseCommandArgs,
        payload: {
          text: "ABC"
        }
      })
    );
    app.executeQueuedCommands();
    expect(app.renderText()).toBe("ABC");
    app.executeQueuedCommands();
    expect(app.renderText()).toBe("ABC");

    // test `Undo` command
    app.executeCommand(undoCommand);
    expect(app.renderText()).toBe("AB");
    app.undoLastCommand();
    expect(app.renderText()).toBe("");
    app.executeCommand(undoCommand);
    app.executeCommand(undoCommand);
    app.executeCommand(undoCommand);
    expect(app.renderText()).toBe("");
  });
});
