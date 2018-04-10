import { EnemyService } from '../enemy/enemy.service';
import { Scissor } from './scissor';
import queueService from '../queue.service';
import fpsService from '../fps.service';

class ScissorService extends EnemyService {

  speedPositive: number;
  speedNegative: number;

  constructor(interval) {
    super(interval);
    this.difficulties = {
      Easy: 5000,
      Medium: 2500,
      Hard: 1000,
      Insane: 500
    }
    fpsService.subscribe(fps => {
      this.speedPositive = fpsService.normalizeSpeed(2);
      this.speedNegative = fpsService.normalizeSpeed(-2);
    });
  }

  spawnEnemy() {
    if (!this.paused) {
      // console.log('spawning')
      const sc1 = new Scissor(this.spawnX, this.spawnY, this.enemyWidth, this.enemyHeight, 'black', 'purple', this.speedNegative, this.speedPositive);
      const sc2 = new Scissor(this.spawnX, this.spawnY, this.enemyWidth, this.enemyHeight, 'black', 'purple', this.speedNegative, this.speedNegative);
      this.enemies.push(sc1, sc2);
      queueService.add(sc1);
      queueService.add(sc2);
      this.newSpawnPoint();
    }
  }

}

const service = new ScissorService(5000);
export default service;
