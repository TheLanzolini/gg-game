import queueService from '../queue.service';
import canvasService from '../canvas/canvas.service';
import pauseService from '../pause.service';
import { Enemy } from './enemy';
import difficultyService from '../difficulty.service';

interface EnemyDifficulties {
  Easy: number;
  Medium: number;
  Hard: number;
  Insane: number;
}

export class EnemyService {

  private interval;
  intervalTime: number;
  enemies: Array<Enemy>;
  spawnX: number;
  spawnY: number;
  enemyHeight: number = 15;
  enemyWidth: number = 15;
  paused: boolean = false;
  difficulties: EnemyDifficulties;

  constructor(
    intervalTime: number = 1000
  ) {
    this.intervalTime = intervalTime;
    this.enemies = [];
    this.spawnEnemy();
    this.setInterval();
    this.spawnX = canvasService.width;
    this.newSpawnPoint();
    pauseService.subscribe(p => this.paused = p);
    this.difficulties = {
      Easy: 1000,
      Medium: 500,
      Hard: 250,
      Insane: 100
    }
    difficultyService.subscribe(difficulty => {
      const newDifficulty = this.difficulties[difficulty];
      this.changeInterval(newDifficulty);
    });
  }

  setInterval() {
    this.interval = setInterval(this.spawnEnemy.bind(this), this.intervalTime);
  }

  changeInterval(intervalTime) {
    this.clearInterval();
    this.intervalTime = intervalTime;
    this.setInterval();
  }

  clearInterval() {
    window.clearInterval(this.interval);
  }

  newSpawnPoint(): void {
    this.spawnY = Math.round(Math.random() * (canvasService.height - this.enemyHeight));
  }

  spawnEnemy() {
    if (!this.paused) {
      const enemy = new Enemy(this.spawnX, this.spawnY, this.enemyWidth, this.enemyHeight, 'black', 'red', -5);
      this.enemies.push(enemy);
      queueService.add(enemy);
      this.newSpawnPoint();
    }
  }

  destroyEnemy(enemy) {
    this.enemies = this.enemies.filter(e => e != enemy);
    queueService.remove(enemy);
  }

}

const service =  new EnemyService();
export default service;
