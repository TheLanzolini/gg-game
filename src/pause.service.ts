import controllerService from './controller.service';


class Pause {
  paused: boolean = false;
  callbacks: any;
  constructor() {
    controllerService.subscribe(controls => {
      if (controls.p) {
        this.paused = !this.paused;
        this.dispatchPause();
      }
    });
    this.callbacks = [];
    window.addEventListener('focus', () => {
      this.paused = false;
      this.dispatchPause.bind(this)();
    });
    window.addEventListener('blur', () => {
      this.paused = true;
      this.dispatchPause.bind(this)();
    });
    document.addEventListener('visibilitychange', () => {
      this.paused = document.visibilityState === 'hidden';
    });
  }

  subscribe(func) {
    if (!this.callbacks.includes(func)) {
      this.callbacks.push(func);
      return this.paused;
    }
  }

  dispatchPause() {
    this.callbacks.forEach(func => func(this.paused));
  }

}

export default new Pause();
