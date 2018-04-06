import { Canvas } from './canvas'

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

  get() {
    return this.context;
  }
}

const service = new CanvasService();
export default service;
