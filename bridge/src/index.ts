/* The abstraction class is the interface for the client code that controls it */
class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isActive()) this.device.turnInactive();
    else this.device.turnActive();
  }

  upVolume() {
    const volume = this.device.volume() + 10;
    const newVolume = Math.min(volume, this.device.MAX_VOLUME);
    this.device.setVolume(newVolume);
  }

  downVolume() {
    const volume = this.device.volume() - 10;
    const newVolume = Math.max(volume, this.device.MIN_VOLUME);
    this.device.setVolume(newVolume);
  }
}

/* The implementation interface */
interface Device {
  MIN_VOLUME: number;
  MAX_VOLUME: number;
  name: () => string;
  isActive: () => boolean;
  turnActive: () => void;
  turnInactive: () => void;
  volume: () => number;
  setVolume: (percent: number) => void;
}

// ===============================
// CONCRETE IMPLEMENTATION CLASSES
// ===============================

class TV implements Device {
  protected _isActive = false;
  protected _volume = 20;
  MIN_VOLUME = 0;
  MAX_VOLUME = 100;

  name() {
    return "TV";
  }

  isActive() {
    return this._isActive;
  }

  turnActive() {
    this._isActive = true;
  }

  turnInactive() {
    this._isActive = false;
  }

  volume() {
    return this._volume;
  }

  setVolume(percent: number) {
    this._volume = percent;
  }
}

class Radio implements Device {
  protected _isActive = false;
  protected _volume = 30;
  MIN_VOLUME = 0;
  MAX_VOLUME = 90;

  name() {
    return "Radio";
  }

  isActive() {
    return this._isActive;
  }

  turnActive() {
    this._isActive = true;
  }

  turnInactive() {
    this._isActive = false;
  }

  volume() {
    return this._volume;
  }

  setVolume(percent: number) {
    this._volume = percent;
  }
}

export {
  RemoteControl,
  TV,
  Radio
}
