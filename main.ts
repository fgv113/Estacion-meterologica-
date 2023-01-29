radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("Temperatura satélite" + receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Temperatura Base" + input.temperature())
})
radio.onReceivedString(function (receivedString) {
    radio.sendNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Temperatura satélite ?")
})
radio.setGroup(1)
basic.forever(function () {
	
})
