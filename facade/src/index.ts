export namespace Computer {
  export interface InputDevice {
    deviceType: string;
    isOn: boolean;
    turnOn: () => void;
    turnOff: () => void;
  }

  export interface OutputDevice {
    deviceType: string;
    isActive: boolean;
    setIsActive: () => void;
    setIsInactive: () => void;
  }

  /* A subsystem */
  export class Mouse implements InputDevice {
    deviceType = "input";
    isOn = false;

    turnOn() {
      this.isOn = true;
    }

    turnOff() {
      this.isOn = false;
    }
  }

  /* A subsystem */
  export class Keyboard implements InputDevice {
    deviceType = "input";
    isOn = false;

    turnOn() {
      this.isOn = true;
    }

    turnOff() {
      this.isOn = false;
    }
  }

  /* A subsystem */
  export class Display implements OutputDevice {
    deviceType = "output";
    isActive = false;

    setIsActive() {
      this.isActive = true;
    }

    setIsInactive() {
      this.isActive = false;
    }
  }

  /* A subsystem */
  export class Machine {
    isOn = false;

    turnOn() {
      this.isOn = true;
    }

    turnOff() {
      this.isOn = false;
    }
  }

  type Devices = (InputDevice | OutputDevice)[];

  /* The facade */
  export class MachineFacade {
    machine: Machine;
    devices: Devices;

    constructor(machine: Machine, devices: Devices) {
      this.machine = machine;
      this.devices = devices;
    }

    turnOn() {
      this.machine.turnOn();
      for (const device of this.devices) {
        if (device.deviceType === "input") {
          (device as InputDevice).turnOn();
        } else {
          (device as OutputDevice).setIsActive();
        }
      }
    }

    turnOff() {
      for (const device of this.devices) {
        if (device.deviceType === "input") {
          (device as InputDevice).turnOff();
        } else {
          (device as OutputDevice).setIsInactive();
        }
      }
      this.machine.turnOff();
    }
  }
}
