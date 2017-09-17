import './canvas.css'

export const canvasSize = {
  width: 1024,
  height: 640
}

class Canvas {
  constructor(size = canvasSize) {
    const { width, height } = size
    this.objects = {}
    this.tickInterval = undefined
    this.width = width
    this.height = height
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    document.body.appendChild(canvas)
    this.context = canvas.getContext('2d')
    this.paused = false
  }

  addObject(object) {
    this.objects[object.id] = object
  }

  removeObject(id) {
    delete this.objects[id]
  }

  pause() {
    this.paused = true
  }

  unpause() {
    this.paused = false
  }


  render() {
    // render background first
    if (this.paused) {
      return false
    }
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    this.context.strokeStyle = '#000000'
    this.context.lineWidth = 2
    this.context.strokeRect(0, 0, this.context.canvas.width, this.context.canvas.height)
    Object.values(this.objects).forEach(o => o.draw(this.context))
  }
}

export default Canvas
