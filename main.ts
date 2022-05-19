radio.setGroup(1)
let value = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(value)
    basic.pause(1000)
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    }
    
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
    }
    
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Heart)
    }
    
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.House)
    }
    
})
// def on_button_pressed_b():
//    radio.send_number(1)
//   basic.show_icon(IconNames.SAD)
// input.on_button_pressed(Button.B, on_button_pressed_b)
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showIcon(IconNames.Happy)
    let value = 0
    if (TouchButtonEvent.Pressed) {
        basic.pause(1000)
        radio.sendNumber(value)
    }
    
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
    value = value + 1
    if (TouchButtonEvent.Pressed) {
        basic.showIcon(IconNames.Heart)
    }
    
    // radio.send_number(value)
    // basic.pause(1000)
    // basic.show_icon(IconNames.HEART)
    value = value + 1
    if (TouchButtonEvent.Pressed) {
        radio.sendNumber(value)
    }
    
    // basic.pause(1000)
    basic.showIcon(IconNames.House)
    value = value + 1
    basic.pause(1000)
    basic.showIcon(IconNames.SmallHeart)
    value = value + 1
    basic.pause(1000)
    basic.showIcon(IconNames.Scissors)
    value = value + 1
    basic.pause(1000)
    basic.showIcon(IconNames.Silly)
    value = value + 1
    basic.pause(1000)
    basic.showIcon(IconNames.Skull)
    value = value + 1
})
