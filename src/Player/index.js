import { canvasSize } from '../Canvas'
import { scene } from '../'
import collision from '../utils/collision'

const defaultOptions = {
  x: 100,
  y: 100,
  xSpeed: 0,
  ySpeed: 0,
  width: 30,
  height: 30
}

class Player {
  constructor(options = {}) {
    this.id = 1
    this.options = Object.assign({}, defaultOptions, options)
    this.context = undefined
    this.eventAttached = false
    this.movementState = {
      UP: false,
      DOWN: false,
      LEFT: false,
      RIGHT: false
    }
    this.health = 3
    this.keyDown = this.keyDown.bind(this)
    this.keyUp = this.keyUp.bind(this)
  }

  keyDown(e) {
    if (e.keyCode === 37) {
      this.movementState.LEFT = true
    }
    if (e.keyCode === 38) {
      this.movementState.UP = true
    }
    if (e.keyCode === 39) {
      this.movementState.RIGHT = true
    }
    if (e.keyCode === 40) {
      this.movementState.DOWN = true
    }
  }

  keyUp(e) {
    if (e.keyCode === 37) {
      this.movementState.LEFT = false
    }
    if (e.keyCode === 38) {
      this.movementState.UP = false
    }
    if (e.keyCode === 39) {
      this.movementState.RIGHT = false
    }
    if (e.keyCode === 40) {
      this.movementState.DOWN = false
    }
  }

  enableControl() {
    window.addEventListener('keydown', this.keyDown)
    window.addEventListener('keyup', this.keyUp)
    this.options.xSpeed = 10
    this.options.ySpeed = 10
    this.eventAttached = true
  }

  disableControl() {
    window.removeEventListener('keydown', this.keyDown)
    window.removeEventListener('keyup', this.keyUp)
    this.options.xSpeed = 0
    this.options.ySpeed = 0
  }

  updatePosition() {
    if (this.movementState.LEFT) {
      this.options.x -= this.options.xSpeed
    }
    if (this.movementState.UP) {
      this.options.y -= this.options.ySpeed
    }
    if (this.movementState.RIGHT) {
      this.options.x += this.options.xSpeed
    }
    if (this.movementState.DOWN) {
      this.options.y += this.options.ySpeed
    }
    if (this.options.y < 0) {
      this.options.y = 0
    }
    if (this.options.x < 0) {
      this.options.x = 0
    }
    if (this.options.y + this.options.height > canvasSize.height) {
      this.options.y = canvasSize.height - this.options.height
    }
    if (this.options.x + this.options.width > canvasSize.width) {
      this.options.x = canvasSize.width - this.options.width
    }
  }

  hit() {
    if (this.health === 1) {
      // ded?
    } else {
      this.health--
    }
  }

  draw(context) {
    this.context = context;
    if (this.context == null) {
      return false;
    }
    if (!this.eventAttached) {
      this.enableControl()
    }

    this.updatePosition()

    const { options, movementState } = this
    const { x, y, width, height } = options

    const enemies = Object.values(scene.objects).filter(val => val.type == 'ENEMY' && collision(this.options, val.options))

    enemies.forEach(en => {
      en.kill()
      this.hit()
    })

    this.context.lineWidth = 1
    this.context.strokeStyle = '#000000'
    this.context.fillStyle = '#42A5F5'
    this.context.fillRect(x, y, width, height)
    this.context.strokeRect(x, y, width, height)
  }
}

export default Player
