import canvasService from './canvas/canvas.service';
import { Actor } from './actor/actor';

interface Quadrant {
  [index: number]: number;
}

export enum Qs {
  Q1,
  Q2,
  Q3,
  Q4,
  Outside
}

/*
QUADRANT
keyed by a quadrant enum. value is [x1, x2, y1, y2]
*-------------*-------------*
|             |             |
|             |             |
|     Q1      |     Q2      |
|             |             |
|             |             |
*-------------*-------------*
|             |             |
|             |             |
|     Q3      |     Q4      |
|             |             |
|             |             |
*-------------*-------------*
*/

const widthHalfPoint = canvasService.width / 2;
const heightHalfPoint = canvasService.height / 2;

const Quadrants = {
  [Qs.Q1]: [0, widthHalfPoint, 0, heightHalfPoint],
  [Qs.Q2]: [widthHalfPoint, canvasService.width, 0, heightHalfPoint],
  [Qs.Q3]: [0, widthHalfPoint, heightHalfPoint, canvasService.height],
  [Qs.Q4]: [widthHalfPoint, canvasService.width, heightHalfPoint, canvasService.height]
}

class CollisionService {
  constructor() {}

  determineQuadrant(actor: Actor): Qs {
    return (
      actor.xPos > Quadrants[Qs.Q1][0] && actor.xPos < Quadrants[Qs.Q1][1] && actor.yPos > Quadrants[Qs.Q1][2] && actor.yPos < Quadrants[Qs.Q1][3] ? Qs.Q1 :
      actor.xPos > Quadrants[Qs.Q2][0] && actor.xPos < Quadrants[Qs.Q2][1] && actor.yPos > Quadrants[Qs.Q2][2] && actor.yPos < Quadrants[Qs.Q2][3] ? Qs.Q2 :
      actor.xPos > Quadrants[Qs.Q3][0] && actor.xPos < Quadrants[Qs.Q3][1] && actor.yPos > Quadrants[Qs.Q3][2] && actor.yPos < Quadrants[Qs.Q3][3] ? Qs.Q3 :
      actor.xPos > Quadrants[Qs.Q4][0] && actor.xPos < Quadrants[Qs.Q4][1] && actor.yPos > Quadrants[Qs.Q4][2] && actor.yPos < Quadrants[Qs.Q4][3] ? Qs.Q4 :
      Qs.Outside
    );
  }

  checkCollision(actor_1: Actor, actor_2: Actor): boolean {
    return (
       actor_1.quadrant !== actor_2.quadrant &&
       actor_1.xPos < actor_2.xPos + actor_2.width &&
       actor_1.xPos + actor_1.width > actor_2.xPos &&
       actor_1.yPos < actor_2.yPos + actor_2.height &&
       actor_1.height + actor_1.yPos > actor_2.yPos
    );
  }

}

const service = new CollisionService;
export default service;
