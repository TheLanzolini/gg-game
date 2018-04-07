import { Canvas } from './canvas'
import { Actor } from '../actor/actor';
import { Direction } from '../direction.interface';

class CanvasService {

  canvas: Canvas;
  context: CanvasRenderingContext2D;
  height: number;
  width: number;

  constructor() {
    this.canvas = new Canvas();
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.context = this.canvas.createCanvas();
  }

  checkInBounds(actor: Actor): boolean {
    return !(
      actor.xPos < 0 ||
      actor.yPos < 0 ||
      actor.xPos + actor.width > this.width ||
      actor.yPos + actor.height > this.height
    );
  }

  checkInBoundsExceptRight(actor: Actor): boolean {
    return !(
      actor.xPos < 0 ||
      actor.yPos < 0 ||
      actor.yPos + actor.height > this.height
    );
  }

  checkInBoundsDirection(actor: Actor, direction: Direction) {
    return direction === Direction.Top ? !(actor.yPos < 0) :
      direction === Direction.Bottom ? !(actor.yPos + actor.height > this.height) :
      direction === Direction.Left ? !(actor.xPos < 0) :
      direction === Direction.Right ? !(actor.xPos + actor.width > this.width) :
      false;
  }

  get() {
    return this.context;
  }
}
const service = new CanvasService();
export default service;
