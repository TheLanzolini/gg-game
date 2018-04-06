import { Canvas } from './canvas'
import { Actor } from '../actor/actor';

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

  checkInBounds(actor: Actor) {
    return !(
      actor.xPos < 0 ||
      actor.yPos < 0 ||
      actor.xPos + actor.width > this.width ||
      actor.yPos + actor.height > this.height
    )
  }

  get() {
    return this.context;
  }
}

const service = new CanvasService();
export default service;
