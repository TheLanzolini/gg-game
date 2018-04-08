import { Difficulties } from './difficulties.interface';


class DifficultyService {
  callbacks: any;
  difficulty: Difficulties;
  constructor() {
    this.callbacks = [];
    this.difficulty = Difficulties.Easy;
  }

  changeDifficulty(difficulty: Difficulties) {
    this.difficulty = difficulty;
    this.dispatchDifficulty();
  }

  subscribe(func) {
    if (!this.callbacks.includes(func)) {
      this.callbacks.push(func);
      return this.difficulty;
    }
  }

  dispatchDifficulty() {
    this.callbacks.forEach(func => func(this.difficulty));
  }
}

const service = new DifficultyService();
export default service;
