radio.set_group(1)
value = 0
def on_button_pressed_a():
    radio.send_number(value)
    basic.pause(1000)
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_received_number(receivedNumber):
    if receivedNumber == 0:
        basic.show_icon(IconNames.HAPPY)
    if receivedNumber == 1:
        basic.show_icon(IconNames.SAD)
    if receivedNumber == 2:
        basic.show_icon(IconNames.HEART)
    if receivedNumber == 3:
        basic.show_icon(IconNames.HOUSE)
radio.on_received_number(on_received_number)
#def on_button_pressed_b():
 #   radio.send_number(1)
  #  basic.show_icon(IconNames.SAD)
#input.on_button_pressed(Button.B, on_button_pressed_b)
def on_button_pressed_ab():
    basic.show_icon(IconNames.HAPPY)
    value = 0
    if TouchButtonEvent.PRESSED:
        basic.pause(1000)
        radio.send_number(value)
    basic.pause(1000)
    basic.show_icon(IconNames.SAD)
    value = value+1
    if TouchButtonEvent.PRESSED:
        basic.show_icon(IconNames.HEART)
        #radio.send_number(value)
    #basic.pause(1000)
    #basic.show_icon(IconNames.HEART)
    value = value+1
    if TouchButtonEvent.PRESSED:
            radio.send_number(value)
    
    #basic.pause(1000)
    basic.show_icon(IconNames.HOUSE)
    value = value+1
    basic.pause(1000)
    basic.show_icon(IconNames.SMALL_HEART)
    value = value+1
    basic.pause(1000)
    basic.show_icon(IconNames.SCISSORS)
    value = value+1
    basic.pause(1000)
    basic.show_icon(IconNames.SILLY)
    value = value+1
    basic.pause(1000)
    basic.show_icon(IconNames.SKULL)
    value = value+1
input.on_button_pressed(Button.AB, on_button_pressed_ab)
