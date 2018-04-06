import queueService from '../queue.service';
import { Enemy } from './enemy';


class EnemyService {

  private interval;
  intervalTime: number;
  private enemies: Array<Enemy>;

  constructor(
    intervalTime: number
  ) {
    this.intervalTime = intervalTime;
    this.enemies = [];
    this.spawnEnemy();
    this.setInterval();
  }

  setInterval() {
    this.interval = setInterval(this.spawnEnemy.bind(this), this.intervalTime);
  }

  changeInterval(intervalTime: number) {
    this.clearInterval();
    this.intervalTime = intervalTime;
    this.setInterval();
  }

  clearInterval() {
    window.clearInterval(this.interval);
  }

  spawnEnemy() {
    const enemy = new Enemy(500, 500);
    this.enemies.push(enemy);
    queueService.add(enemy);
  }

  destroyEnemy(enemy) {
    this.enemies = this.enemies.filter(e => e != enemy);
    queueService.remove(enemy);
  }

}

const service =  new EnemyService(500);
export default service;
