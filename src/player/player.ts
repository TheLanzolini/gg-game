import { Actor } from '../actor/actor';
import canvasService from '../canvas/canvas.service';
import { Direction } from '../direction.interface';
import collisionService from '../collision.service';
import enemyService from '../enemy/enemy.service';

export class Player extends Actor {
  constructor() {
    const height = 20;
    const width = 20;
    super(width, canvasService.height / 2 - height / 2, width, height, 'black',  'blue');
  }
  render() {
    if (!canvasService.checkInBoundsDirection(this, Direction.Top)) {
      this.yPos = 0;
      this.ySpeed = 0;
    }
    if (!canvasService.checkInBoundsDirection(this, Direction.Bottom)) {
      this.yPos = canvasService.height - this.height;
      this.ySpeed = 0;
    }
    if (!canvasService.checkInBoundsDirection(this, Direction.Left)) {
      this.xPos = 0;
      this.xSpeed = 0;
    }
    if(!canvasService.checkInBoundsDirection(this, Direction.Right)) {
      this.xPos = canvasService.width - this.width;
      this.xSpeed = 0;
    }
    // enemyService.enemies.forEach(enemy => {
    //   if(collisionService.checkCollision(this, enemy)) {
    //     enemy.fillStyle = 'cyan';
    //     console.log('hit!', enemy);
    //   }
    // });
    // console.log('Quadrant: ', collisionService.determineQuadrant(this));
    super.render();
  }
}
