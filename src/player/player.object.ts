import { Player } from './player';
import controllerService from '../controller.service';
import fpsService from '../fps.service';

export const player = new Player();

fpsService.subscribe(fps => {
  const speedPositive = fpsService.normalizeSpeed(5);
  const speedNegative = fpsService.normalizeSpeed(-5);
  controllerService.subscribe(controls => {
    player.xSpeed = controls.right ? speedPositive : controls.left ? speedNegative : 0;
    player.ySpeed = controls.down ? speedPositive : controls.up ? speedNegative : 0;
  });
});
