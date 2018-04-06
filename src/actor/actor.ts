import canvasService from '../canvas/canvas.service';
// console.log(CanvasService)
export class Actor {

  xPos: number;
  yPos: number;
  width: number;
  height: number;
  id: number;

  constructor(
    xPos: number,
    yPos: number,
    width: number,
    height: number,
  ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }

  render(): void {
    canvasService.context.strokeStyle = 'black';
    canvasService.context.fillStyle = 'white';
    canvasService.context.fillRect(this.xPos, this.yPos, this.width, this.height);
    canvasService.context.strokeRect(this.xPos, this.yPos, this.width, this.height);
  }

}
