import Canvas, { canvasSize } from './Canvas'
import Player from './Player'
import Enemy from './Enemy'
import ScissorEnemy from './ScissorEnemy'

export const scene = new Canvas()
export const player = new Player()

const scissorEnemy = new ScissorEnemy()

scene.addObject(player)
// scene.addObject(scissorEnemy)
// setInterval(() => {
//   const enemy = new Enemy({ y: (Math.random() * (canvasSize.height -  25)) })
//   scene.addObject(enemy)
// }, 250)
// let riffy = 20
// const riffInterval = setInterval(() => {
//   if (riffy > canvasSize.height + 50) {
//     clearInterval(riffInterval)
//   }
//   const enemy = new Enemy({
//     y: riffy,
//     xSpeed: -10
//   })
//   riffy += 20
//   scene.addObject(enemy)
// }, 200)

const fireRiff = (riffy = 20) => {
  let nums = 7
  const riffInterval = setInterval(() => {
    if (nums == 1) {
      clearInterval(riffInterval)
    }
    nums--
    const enemy = new Enemy({
      y: riffy,
      xSpeed: -10
    })
    riffy += 30
    scene.addObject(enemy)
  }, 150)
}
fireRiff()
setTimeout(function(){
  fireRiff(175)
}, 1750)

setTimeout(function(){
  fireRiff(350)
}, 3500)


scene.render()


animateScenes(scene)

function animateScenes(sc) {
  sc.render()

  window.requestAnimationFrame(animateScenes.bind(this, sc))
}
