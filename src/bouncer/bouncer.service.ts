import { EnemyService } from '../enemy/enemy.service';
import { Bouncer } from './bouncer';
import queueService from '../queue.service';

class BouncerService extends EnemyService {

  constructor(interval) {
    super(interval);
    this.enemyWidth = 30;
    this.enemyHeight = 30;
    this.difficulties = {
      Easy: 2000,
      Medium: 1500,
      Hard: 1000,
      Insane: 500
    }
  }

  spawnEnemy() {
    if (!this.paused) {
      const direction = Math.round(Math.random() * 10) > 5 ? -1 : 1;
      const randomX = -3 - (Math.round(Math.random() * 3));
      const randomY = (3 * direction) + (Math.round(Math.random() * 3 * direction));
      const bouncer = new Bouncer(this.spawnX, this.spawnY, this.enemyWidth, this.enemyHeight, 'black', 'yellow', randomX, randomY);
      this.enemies.push(bouncer);
      queueService.add(bouncer);
      this.newSpawnPoint();
    }
  }

}

export default new BouncerService(2000);
