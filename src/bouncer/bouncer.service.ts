import { EnemyService } from '../enemy/enemy.service';
import { Bouncer } from './bouncer';
import queueService from '../queue.service';
import fpsService from '../fps.service';

class BouncerService extends EnemyService {

  positiveThree: number;
  negativeThree: number;

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
    fpsService.subscribe(fps => {
      this.positiveThree = fpsService.normalizeSpeed(3) ;
      this.negativeThree = fpsService.normalizeSpeed(-3);
    });
  }

  spawnEnemy() {
    if (!this.paused) {
      const direction = Math.round(Math.random() * 10) > 5 ? -1 : 1;
      const randomX = this.negativeThree - (Math.round(Math.random() * this.positiveThree));
      const randomY = (this.positiveThree * direction) + (Math.round(Math.random() * this.positiveThree * direction));
      const bouncer = new Bouncer(this.spawnX, this.spawnY, this.enemyWidth, this.enemyHeight, 'black', 'yellow', randomX, randomY);
      this.enemies.push(bouncer);
      queueService.add(bouncer);
      this.newSpawnPoint();
    }
  }

}

export default new BouncerService(2000);
