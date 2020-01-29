let pixel = game.createSprite(2, 2)
let horizon = Math.randomRange(0, 4)
let vertical = Math.randomRange(0, 4)
input.onButtonPressed(Button.A, function () {
    pixel.turn(Direction.Right, 45)
})
input.onButtonPressed(Button.B, function () {
    pixel.setX(horizon)
    pixel.setY(vertical)
    basic.pause(200)
})
basic.forever(function () {
    pixel.move(1)
    basic.pause(80)
    pixel.ifOnEdgeBounce()
}) 
