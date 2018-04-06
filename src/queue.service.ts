import { Actor } from './actor/actor';


export class QueueService {

  queue: Array<Actor>;

  constructor() {
    this.queue = [];
  }

  add(actor: Actor): void {
    this.queue.push(actor);
  }

  remove(actor: Actor): void {
    this.queue = this.queue.filter(a => a != actor);
  }

  render(): void {
    this.queue.forEach(actor => actor.render());
  }

}
