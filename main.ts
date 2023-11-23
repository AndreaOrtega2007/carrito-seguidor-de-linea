let Sens_Izquierdo = 0
let Sens_Derecho = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(2000)
led.enable(false)
pins.digitalWritePin(DigitalPin.P3, 0)
pins.digitalWritePin(DigitalPin.P4, 0)
basic.forever(function () {
    Sens_Derecho = pins.analogReadPin(AnalogPin.P0)
    Sens_Izquierdo = pins.analogReadPin(AnalogPin.P1)
    if (Sens_Derecho < 50 && Sens_Izquierdo < 50) {
        pins.analogWritePin(AnalogPin.P3, 500)
        pins.analogWritePin(AnalogPin.P4, 500)
    } else if (Sens_Derecho >= 50 && Sens_Izquierdo >= 50) {
        pins.analogWritePin(AnalogPin.P3, 0)
        pins.analogWritePin(AnalogPin.P4, 0)
    } else if (Sens_Derecho < 50 && Sens_Izquierdo >= 50) {
        pins.analogWritePin(AnalogPin.P3, 0)
        pins.analogWritePin(AnalogPin.P4, 500)
    } else if (Sens_Derecho >= 50 && Sens_Izquierdo < 50) {
        pins.analogWritePin(AnalogPin.P3, 500)
        pins.analogWritePin(AnalogPin.P4, 0)
    }
})
