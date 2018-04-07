import { Enemy } from '../enemy/enemy';
import canvasService from '../canvas/canvas.service';
import { Direction } from '../direction.interface';

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
    // this.y++;
    // if (this.y === this.threshold) {
    //   this.ySpeed = this.ySpeed * -1;
    //   this.y = 0;
    // }
    super.render();
  }
}
