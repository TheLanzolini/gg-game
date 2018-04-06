interface Controls {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  space: boolean;
  p: boolean;
}

interface Callback {
  (): Controls;
}

interface KeyCodeMap {
  [index: number]: string;
}

class ControllerService {

  controls: Controls;
  // callbacks: Array<Callback>;
  callbacks: any;
  keyCodes: Array<number>;
  keyCodeMap: KeyCodeMap;

  constructor() {
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.controls = {
      up: false,
      down: false,
      left: false,
      right: false,
      space: false,
      p: false
    } as Controls
    this.callbacks = [];
    this.keyCodes = [38, 40, 37, 39, 32, 80];
    this.keyCodeMap = {
      38: 'up',
      40: 'down',
      37: 'left',
      39: 'right',
      32: 'space',
      80: 'p'
    }
    this.attachListeners();
  }

  subscribe(func) {
    if (!this.callbacks.includes(func)) {
      this.callbacks.push(func);
      return this.controls;
    }
  }

  dispatchControls() {
    this.callbacks.forEach(func => func(this.controls));
  }

  keyDown(e) {
    this.keyCodes.forEach(code => {
      if (code === e.keyCode) {
        this.controls[this.keyCodeMap[e.keyCode]] = true;
      }
    });
    this.dispatchControls();
  }

  keyUp(e) {
    this.keyCodes.forEach(code => {
      if (code === e.keyCode) {
        this.controls[this.keyCodeMap[e.keyCode]] = false;
      }
    });
    this.dispatchControls();
  }

  attachListeners() {
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
  }

  removeListeners() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
  }

}

const service = new ControllerService();

export default service;
