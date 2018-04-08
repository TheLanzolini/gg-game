import { Enemy } from '../enemy/enemy';
import canvasService from '../canvas/canvas.service';
import { Direction } from '../direction.interface';
import BouncerService from './bouncer.service';

export class Bouncer extends Enemy {

  // private threshold: number = 50;
  // private y: number = 0;

  constructor(...args) {
    super(...args);
  }

  render() {
    if (!canvasService.checkInBoundsDirection(this, Direction.Top)) {
      this.yPos = 0;
      this.ySpeed = this.ySpeed * -1;
    }
    if (!canvasService.checkInBoundsDirection(this, Direction.Bottom)) {
      this.yPos = canvasService.height - this.height;
      this.ySpeed = this.ySpeed * -1;
    }
    if (canvasService.checkInBoundsExceptRight(this)) {
      super.render();
    } else {
      BouncerService.destroyEnemy(this);
    }
    // super.render();
  }
}
