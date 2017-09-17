import { canvasSize } from '../Canvas'
import { scene } from '../index'

const defaultOptions = {
  x: canvasSize.width + 10,
  y: canvasSize.height / 2,
  xSpeed: -2,
  ySpeed: 0,
  width: 20,
  height: 20,
  color: '#F44336',
}

export default class Enemy {
  constructor(options = {}) {
    this.options = Object.assign({}, defaultOptions, options)
    this.context = undefined
    this.id = new Date().getTime()
    this.type = 'ENEMY'
  }

  updateXSpeed(speed) {
    this.options.xSpeed = speed
  }

  updateYSpeed(speed) {
    this.options.ySpeed = speed
  }

  updatePosition() {
    this.options.x += this.options.xSpeed
    this.options.y += this.options.ySpeed
  }

  kill() {
    if (!!scene) {
      scene.removeObject(this.id)
    }
  }

  draw(context) {
    this.context = context
    if (!this.context){
      return false
    }
    this.updatePosition()

    if (this.options.x < -50) {
      this.kill()
    }

    const { options: { x, y, width, height } } = this
    this.context.lineWidth = 1
    this.context.strokeStyle = '#000000'
    this.context.fillStyle = this.options.color
    this.context.fillRect(x, y, width, height)
    this.context.strokeRect(x, y, width, height)
  }
}
