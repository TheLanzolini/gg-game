import { Actor } from '../actor/actor';
import canvasService from '../canvas/canvas.service';
import enemyService from './enemy.service';

export class Enemy extends Actor {

  constructor(...args) {
    super(...args);
    this.fillStyle = 'red';
    this.xSpeed = -5;
  }

  render() {
    if (canvasService.checkInBounds(this)) {
      super.render();
    } else {
      enemyService.destroyEnemy(this);
    }
  }

}
