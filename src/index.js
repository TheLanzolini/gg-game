// interaction imports
import canvasService from './canvas/canvas.service';
import queueService from './queue.service';
import controllerService from './controller.service';
import pauseService from './pause.service';
import difficultyService from './difficulty.service';
import fpsService from './fps.service';
import collisionService from './collision.service';

// object service imprts
import enemyService from './enemy/enemy.service';
import scissorService from './scissor/scissor.service';
import bouncerService from './bouncer/bouncer.service';

import { Enemy } from './enemy/enemy';
import { outline } from './canvas/outline.object';
import { player } from './player/player.object';
import { Difficulties } from './difficulties.interface';
import './styles.css';

queueService.add(outline);
queueService.add(player);

const $pauseDisplay = document.getElementById('pause-display');
const $fps = document.getElementById('fps');
const $difficulties = document.getElementById('difficulties');

difficultyService.changeDifficulty(Difficulties.Easy);
Object.keys(Difficulties).forEach(d => {
  const $button = document.createElement('button');
  $button.textContent = d;
  $button.addEventListener('click', e => {
    difficultyService.changeDifficulty(Difficulties[d]);
  });
  $difficulties.appendChild($button);
});

let paused = false;

pauseService.subscribe(p => {
  paused = p;
  $pauseDisplay.classList[p ? 'add' : 'remove']('active');
});

function paint() {
  if (!paused) {
    queueService.render();
  }
  fpsService.increment();
  // console.log(i);

  // setTimeout(() => {
    window.requestAnimationFrame(paint);
  // }, 10)
}

paint();
