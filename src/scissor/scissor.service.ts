import { EnemyService } from '../enemy/enemy.service';
import { Scissor } from './scissor';
import queueService from '../queue.service';

class ScissorService extends EnemyService {

  constructor(interval) {
    super(interval);
  }

  spawnEnemy() {
    if (!this.paused) {
      // console.log('spawning')
      const sc1 = new Scissor(this.spawnX, this.spawnY, this.enemyWidth, this.enemyHeight, 'black', 'purple', -1, 1);
      const sc2 = new Scissor(this.spawnX, this.spawnY, this.enemyWidth, this.enemyHeight, 'black', 'purple', -1, -1);
      this.enemies.push(sc1, sc2);
      queueService.add(sc1);
      queueService.add(sc2);
      this.newSpawnPoint();
    }
  }

}

export default new ScissorService(5000);
