export class Canvas {

  context: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor(
    width: number = 960,
    height: number = 600,
    private target: HTMLElement = document.body
  ) {
    this.width = width;
    this.height = height;
    this.target = target;
  }

  createCanvas(): CanvasRenderingContext2D {
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
