import canvasService from './canvas/canvas.service';
import queueService from './queue.service';

import enemyService from './enemy/enemy.service';
import scissorService from './scissor/scissor.service';
import BouncerService from './bouncer/bouncer.service';

import controllerService from './controller.service';
import pauseService from './pause.service';
import { Actor } from './actor/actor';
import { Enemy } from './enemy/enemy';
import { outline } from './canvas/outline.object';
import { player } from './player/player.object';
import './styles.css';

queueService.add(outline);
queueService.add(player);

const $pauseDisplay = document.getElementById('pause-display');

let paused = false;

pauseService.subscribe(p => {
  paused = p;
  $pauseDisplay.classList[p ? 'add' : 'remove']('active');
});

function paint() {
  if (!paused) {
    queueService.render();
  }

  window.requestAnimationFrame(paint);
}

paint();
