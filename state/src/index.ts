/* The context */
class AudioPlayer {
  private _state: State;
  private _isPlaying: boolean;

  constructor() {
    this._state = new ReadyState(this);
    this._isPlaying = false;
  }

  state() {
    return this._state;
  }

  changeState(state: State) {
    this._state = state;
  }

  lock() {
    this._state.lock();
  }

  play() {
    this._state.play();
  }

  isPlaying() {
    return this._isPlaying;
  }

  toggleIsPlaying() {
    this._isPlaying = !this._isPlaying;
  }
}

/* The state interface or base class */
abstract class State {
  name: string;
  protected player: AudioPlayer;

  constructor(player: AudioPlayer) {
    this.name = "";
    this.player = player;
  }

  abstract lock(): void;

  abstract play(): void;
}

// =========================
// CONCRETE STATE SUBCLASSES
// =========================

class LockedState extends State {
  constructor(player: AudioPlayer) {
    super(player);
    this.name = "LockedState";
  }

  lock() {
    if (this.player.isPlaying()) {
      this.player.changeState(new PlayingState(this.player));
    } else {
      this.player.changeState(new ReadyState(this.player));
    }
  }

  play() { }
}

class ReadyState extends State {
  constructor(player: AudioPlayer) {
    super(player);
    this.name = "ReadyState";
  }

  lock() {
    this.player.changeState(new LockedState(this.player));
  }

  play() {
    this.player.toggleIsPlaying();
    this.player.changeState(new PlayingState(this.player));
  }
}

class PlayingState extends State {
  constructor(player: AudioPlayer) {
    super(player);
    this.name = "PlayingState";
  }

  lock() {
    this.player.changeState(new LockedState(this.player));
  }

  play() {
    this.player.toggleIsPlaying();
    this.player.changeState(new ReadyState(this.player));
  }
}

export {
  AudioPlayer
}
