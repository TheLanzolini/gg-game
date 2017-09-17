import Enemy from '../Enemy'

const defaultOptions = {
  width: 75,
  height: 75,
  xSpeed: -1
}

class BigEnemy extends Enemy {
  constructor(options = {}) {
    const opts = Object.assign({}, defaultOptions, options)
    super(opts)
  }
}

export default BigEnemy
