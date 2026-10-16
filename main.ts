let 名前Y = ""
let 名前X = ""
radio.setGroup(191)
if (input.buttonIsPressed(Button.A)) {
    名前X = "AX"
    名前Y = "AY"
    basic.showString("A")
} else {
    名前X = "BX"
    名前Y = "BY"
    basic.showString("B")
}
basic.forever(function () {
    radio.sendValue(名前X, input.acceleration(Dimension.X))
    basic.pause(100)
    radio.sendValue(名前Y, input.acceleration(Dimension.Y))
    basic.pause(100)
})
