
class FpsService {

  private interval;
  last_i: number = 0;
  i: number = 0;
  fps: number;
  $fps: HTMLElement;
  callbacks: any;

  constructor() {
    this.setInterval();
    this.$fps = document.getElementById('fps');
    this.callbacks = [];
  }

  subscribe(func): number {
    if (!this.callbacks.includes(func)) {
      this.callbacks.push(func);
      return this.fps;
    }
  }

  dispatchFps() {
    this.callbacks.forEach(cb => cb(this.fps));
  }

  setInterval() {
    this.interval = window.setInterval(this.calculateFps.bind(this), 1000);
  }

  clearInterval() {
    window.clearInterval(this.interval);
  }

  increment(): void {
    this.i++;
  }

  calculateFps(): number {
    this.fps = this.i - this.last_i;
    this.$fps.innerHTML = `FPS: ${this.fps}`;
    this.last_i = this.i;
    this.dispatchFps();
    return this.fps;
  }

  normalizeSpeed(speed: number): number {
    return (speed * 60) / (this.fps || 60);
  }

}

const service = new FpsService();
export default service;
