import { Actor } from '../actor/actor';
import canvasService from '../canvas/canvas.service';
import enemyService from './enemy.service';
import collisionService from '../collision.service';
import { player } from '../player/player.object';

export class Enemy extends Actor {

  constructor(...args) {
    super(...args);
    // this.fillStyle = 'red';
    // this.xSpeed = -5;
  }

  render() {
    if (canvasService.checkInBoundsExceptRight(this)) {
      if (collisionService.checkCollision(player, this)) {
        this.fillStyle = 'cyan';
      }
      super.render();
    } else {
      enemyService.destroyEnemy(this);
    }
  }

}
