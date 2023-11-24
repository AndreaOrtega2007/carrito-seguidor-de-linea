let Sens_Izquierdo = 0
let Sens_Derecho = 0
basic.showIcon(IconNames.SmallHeart)
basic.pause(2000)
let velocidad_giro = 100
let velocidad = 200
let limite = 250
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    Sens_Derecho = pins.analogReadPin(AnalogPin.P0)
    Sens_Izquierdo = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P8, velocidad)
    if (Sens_Derecho < limite && Sens_Izquierdo < limite) {
        pins.analogWritePin(AnalogPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 0)
    } else if (Sens_Derecho >= limite && Sens_Izquierdo >= limite) {
        led.toggle(2, 2)
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P4, 1)
    } else if (Sens_Derecho < limite && Sens_Izquierdo >= 50) {
        led.toggle(0, 2)
        pins.analogWritePin(AnalogPin.P8, velocidad_giro)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P4, 1)
    } else if (Sens_Derecho >= 50 && Sens_Izquierdo < 50) {
        led.toggle(4, 2)
        pins.analogWritePin(AnalogPin.P8, velocidad_giro)
        pins.digitalWritePin(DigitalPin.P3, 1)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
})
