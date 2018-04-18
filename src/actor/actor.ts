import canvasService from '../canvas/canvas.service';
import collisionService from '../collision.service';
import { Qs } from '../collision.service';
// console.log(CanvasService)
export class Actor {

  xPos: number;
  yPos: number;
  width: number;
  height: number;
  strokeStyle: string;
  fillStyle: string;
  xSpeed: number;
  ySpeed: number;
  quadrant: Qs;

  constructor(
    xPos: number = 0,
    yPos: number = 0,
    width: number = 10,
    height: number = 10,
    strokeStyle: string = 'black',
    fillStyle: string = 'white',
    xSpeed: number = 0,
    ySpeed: number = 0
  ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.quadrant = collisionService.determineQuadrant(this);
  }

  render(): void {
    canvasService.context.strokeStyle = this.strokeStyle;
    canvasService.context.fillStyle = this.fillStyle;
    canvasService.context.fillRect(this.xPos, this.yPos, this.width, this.height);
    canvasService.context.strokeRect(this.xPos, this.yPos, this.width, this.height);
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }

}
