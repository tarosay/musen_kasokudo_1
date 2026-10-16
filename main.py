名前Y = ""
名前X = ""
radio.set_group(191)
if input.button_is_pressed(Button.A):
    名前X = "AX"
    名前Y = "AY"
    basic.show_string("A")
else:
    名前X = "BX"
    名前Y = "BY"
    basic.show_string("B")

def on_forever():
    radio.send_value(名前X, input.acceleration(Dimension.X))
    basic.pause(100)
    radio.send_value(名前Y, input.acceleration(Dimension.Y))
    basic.pause(100)
basic.forever(on_forever)
