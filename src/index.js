import canvasService from './canvas/canvas.service';
import queueService from './queue.service';
import enemyService from './enemy/enemy.service';
import controllerService from './controller.service';
import { Actor } from './actor/actor';
import { Enemy } from './enemy/enemy';
import { outline } from './canvas/outline.object';
import { player } from './player/player.object';

// const enemy = new Enemy(100, 100);
// const player = new Player();
queueService.add(outline);
queueService.add(player);

let paused = false;

controllerService.subscribe(controls => {
  if (controls.p) {
    paused = !paused;
  }
})

function paint() {
  if (!paused) {
    queueService.render();
  }

  window.requestAnimationFrame(paint);
}

paint();
