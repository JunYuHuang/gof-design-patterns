/* The originator class */
class NoteApp {
  private _text: string = "";

  setState(snapshot: Snapshot) {
    const state = snapshot.state();
    this._text = state.text;
  }

  createSnapshot() {
    return new Snapshot({ text: this._text });
  }

  setText(text: string) {
    this._text = text;
  }

  text() {
    return this._text;
  }
}

/* The memento class */
class Snapshot {
  private _state: { [property: string]: any };

  constructor(state: { [property: string]: any }) {
    this._state = state;
  }

  state() {
    return this._state;
  }
}

/* The caretaker class */
class SnapshotHandler {
  private _noteApp: NoteApp;
  private _history: Snapshot[];

  constructor(noteApp: NoteApp) {
    this._noteApp = noteApp;
    this._history = [];
  }

  save() {
    const newSnapshot = this._noteApp.createSnapshot();
    this._history.push(newSnapshot);
  }

  undo() {
    if (this._history.length <= 0) return;
    const lastSnapshot = this._history.pop()!;
    this._noteApp.setState(lastSnapshot);
  }
}

export {
  NoteApp,
  SnapshotHandler
}
