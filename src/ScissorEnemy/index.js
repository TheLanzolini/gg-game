import Enemy from '../Enemy'

const defaultOptions = {
  // xSpeed: -10,
  ySpeed: -1,
  rect1y: false,
  rect2y: false,
  rect1direction: true,
  rect2direction: false,
  color: '#FFEB3B',
  crossThreshold: 20
}

class ScissorEnemy extends Enemy {
  constructor(options = {}) {
    const opts = Object.assign({}, defaultOptions, options)
    super(opts)
  }

  updatePosition() {
    this.options.x += this.options.xSpeed

    if (this.options.rect1y === false) {
      this.options.rect1y = this.options.y
      this.options.rect2y = this.options.y
      return
    }

    if (this.options.rect1direction) {
      this.options.rect1y += this.options.ySpeed
    } else {
      this.options.rect1y -= this.options.ySpeed
    }

    if (this.options.rect2direction) {
      this.options.rect2y += this.options.ySpeed
    } else {
      this.options.rect2y -= this.options.ySpeed
    }

    if (Math.abs(this.options.y - this.options.rect1y) >= this.options.crossThreshold) {
      this.options.rect1direction = !this.options.rect1direction
    }

    if (Math.abs(this.options.y - this.options.rect2y) >= this.options.crossThreshold) {
      this.options.rect2direction = !this.options.rect2direction
    }
  }

  draw(context) {
    this.updatePosition()
    this.context = context
    this.context.strokeStyle = '#0000FF'
    this.context.fillStyle = this.options.color

    this.context.fillRect(this.options.x, this.options.rect1y, this.options.width, this.options.height)
    this.context.strokeRect(this.options.x, this.options.rect1y, this.options.width, this.options.height)
    this.context.fillRect(this.options.x, this.options.rect2y, this.options.width, this.options.height)
    this.context.strokeRect(this.options.x, this.options.rect2y, this.options.width, this.options.height)
  }
}

export default ScissorEnemy
