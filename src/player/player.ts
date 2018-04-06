import { Actor } from '../actor/actor';
import canvasService from '../canvas/canvas.service';

export class Player extends Actor {
  constructor() {
    const height = 20;
    const width = 20;
    super(width, canvasService.height / 2 - height / 2, width, height, 'black',  '#673AB7');
  }
}
