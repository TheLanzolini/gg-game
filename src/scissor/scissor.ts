import { Enemy } from '../enemy/enemy';
import canvasService from '../canvas/canvas.service';
import scissorService from './scissor.service';
import fpsService from '../fps.service';

export class Scissor extends Enemy {

  private threshold: number;
  private y: number = 0;
  private normalizedSpeed: number;

  constructor(...args) {
    super(...args);
    this.threshold = fpsService.normalizeSpeed(1) * 15;
    fpsService.subscribe(fps => {
      this.threshold = fpsService.normalizeSpeed(1) * 15;
    });
  }

  render() {
    this.y += fpsService.normalizeSpeed(1);
    if (this.y === this.threshold) {
      this.ySpeed = this.ySpeed * -1;
      this.y = 0;
    }
    if (canvasService.checkInBoundsExceptRight(this)) {
      super.render();
    } else {
      scissorService.destroyEnemy(this);
    }
    // super.render();
  }
}
