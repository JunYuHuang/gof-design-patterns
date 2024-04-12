export namespace TextEditor {
  /* The command handler */
  export class Handler {
    text: string;

    constructor(text = "") {
      this.text = text;
    }

    setText(text: string) {
      this.text = text;
    }
  }

  type CommandArgsType = {
    payload?: { text: string };
    needs: {
      app: App;
      handler: Handler;
    }
  }

  /* The command interface */
  abstract class Command {
    protected app: App;
    protected handler: Handler;
    protected lastText: string;
    protected payload: undefined | { text: string };

    constructor(args: CommandArgsType) {
      const { app, handler } = args.needs;
      this.app = app;
      this.handler = handler;
      this.lastText = String(this.handler.text);

      if (args.payload !== undefined) {
        this.payload = Object.create(args.payload!);
      }
    }

    saveText() {
      this.lastText = String(this.handler.text);
    }

    undo() {
      this.handler.text = this.lastText;
    }

    // Returns true if command changed `Handler`'s state else false
    abstract execute(): boolean;
  }

  // ================
  // Concrete commands
  // ================

  export class SetTextCommand extends Command {
    execute() {
      this.saveText();
      const text = this.payload ? this.payload.text : "";
      this.handler.setText(text);
      return true;
    }
  }

  export class ClearTextCommand extends Command {
    execute() {
      this.saveText();
      this.handler.setText("");
      return true;
    }
  }

  export class UndoCommand extends Command {
    execute() {
      this.app.undoLastCommand();
      return false;
    }
  }

  /* The client or command caller */
  export class App {
    handler: Handler;
    commandHistory: Command[];  // a stack
    commandQueue: Command[];

    constructor() {
      this.handler = new Handler();
      this.commandHistory = [];
      this.commandQueue = [];
    }

    executeCommand(command: Command) {
      const didChangeState = command.execute();
      if (didChangeState) this.commandHistory.push(command);
    }

    queueCommand(command: Command) {
      this.commandQueue.push(command);
    }

    executeQueuedCommands() {
      while (this.commandQueue.length > 0) {
        const command = this.commandQueue.shift()!;
        this.executeCommand(command);
      }
    }

    undoLastCommand() {
      if (this.commandHistory.length === 0) return;
      const command = this.commandHistory.pop() as Command;
      command.undo();
    }

    renderText() {
      return this.handler.text;
    }
  }
}
