import Canvas, { canvasSize } from './Canvas'
import Player from './Player'
import Enemy from './Enemy'
import BigEnemy from './BigEnemy'

export const scene = new Canvas()
export const player = new Player()

const bigEnemy = new BigEnemy()
// console.log(bigEnemy)

scene.addObject(player)
scene.addObject(bigEnemy)
setInterval(() => {
  const enemy = new Enemy({ y: (Math.random() * (canvasSize.height -  25)), xSpeed: -5 })
  scene.addObject(enemy)
}, 250)
scene.render()


animateScenes(scene)

function animateScenes(sc) {
  sc.render()

  window.requestAnimationFrame(animateScenes.bind(this, sc))
}
