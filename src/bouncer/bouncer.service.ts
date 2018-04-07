import { EnemyService } from '../enemy/enemy.service';
import { Bouncer } from './bouncer';
import queueService from '../queue.service';

class BouncerService extends EnemyService {

  constructor(interval) {
    super(interval);
    this.enemyWidth = 30;
    this.enemyHeight = 30;
  }

  spawnEnemy() {
    if (!this.paused) {
      console.log('spawning')
      const direction = Math.round(Math.random() * 10) > 5 ? -1 : 1;
      const randomX = 3 + Math.round(Math.random() * 5);
      const randomY = 3 + Math.round(Math.random() * 10 * direction);
      const bouncer = new Bouncer(this.spawnX, this.spawnY, this.enemyWidth, this.enemyHeight, 'black', 'yellow', -1, 0);
      this.enemies.push(bouncer);
      queueService.add(bouncer);
      this.newSpawnPoint();
      console.log(this.enemies);
    }
  }

}

export default new BouncerService(2500);
