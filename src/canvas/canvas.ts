export class Canvas {

  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  target: HTMLElement;

  constructor(
    width: number = 900,
    height: number = 600,
    target: HTMLElement = document.body
  ) {
    this.width = width;
    this.height = height;
    this.target = target;
  }

  createCanvas(): CanvasRenderingContext2D {
    this.target = document.getElementById('canvas-wrapper') || this.target;
    const $canvas = document.createElement('canvas');
    $canvas.height = this.height;
    $canvas.width = this.width;
    this.target.appendChild($canvas);
    this.context = $canvas.getContext('2d');
    return this.context;
  }

  // render(): void {
  //   this.context.strokeStyle = 'black';
  //   this.context.strokeRect(0, 0, this.width, this.height);
  // }

}
