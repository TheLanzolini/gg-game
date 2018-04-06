import canvasService from './canvas/canvas.service';
import { Actor } from './actor/actor';
import { QueueService } from './queue.service';
const queueService = new QueueService();

const outline = new Actor(0, 0, canvasService.width, canvasService.height);
class Dummy extends Actor {
  constructor(...args) {
    super(...args);
  }

  checkBounds() {
    const shouldDestroy = this.xPos < 0 ||
    this.xPos + this.width > canvasService.width ||
    this.yPos < 0 ||
    this.yPos + this.height > canvasService.height;
    if (shouldDestroy) {
      queueService.remove(this);
    }
  }

  render() {
    this.checkBounds();
    canvasService.context.strokeStyle = 'black';
    canvasService.context.fillStyle = 'red';
    canvasService.context.fillRect(this.xPos, this.yPos, this.width, this.height);
    canvasService.context.strokeRect(this.xPos, this.yPos, this.width, this.height);
    this.xPos += 10;
    this.yPos += 10;
  }
}

// todo delete from memory with an object
// instead of defining them as const
const dummy = new Dummy(10, 10, 10, 10);


queueService.add(outline);
queueService.add(dummy);

function paint() {
  // sc.render()
  // canvas.render();
  queueService.render();
  setTimeout(() => {
    window.requestAnimationFrame(paint);
  }, 100);
}

paint()
