import { Enemy } from '../enemy/enemy';
import canvasService from '../canvas/canvas.service';
import scissorService from './scissor.service';

export class Scissor extends Enemy {

  private threshold: number = 50;
  private y: number = 0;

  constructor(...args) {
    super(...args);
  }

  render() {
    this.y++;
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
