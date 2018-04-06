import { Player } from './player';
import controllerService from '../controller.service';

export const player = new Player();

controllerService.subscribe(controls => {
  player.xSpeed = controls.right ? 5 : controls.left ? -5 : 0;
  player.ySpeed = controls.down ? 5 : controls.up ? -5 : 0;
});
