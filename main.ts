input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    robotbit.MotorRun(robotbit.Motors.M2A, 0)
    robotbit.MotorRun(robotbit.Motors.M2B, 0)
    basic.pause(500)
    robotbit.MotorRun(robotbit.Motors.M2B, 63)
    robotbit.MotorRun(robotbit.Motors.M2A, 63)
    basic.pause(500)
    robotbit.MotorRun(robotbit.Motors.M2B, 158)
    robotbit.MotorRun(robotbit.Motors.M2A, 158)
    basic.pause(500)
    robotbit.MotorRun(robotbit.Motors.M2B, 255)
    robotbit.MotorRun(robotbit.Motors.M2A, 255)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # # . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    robotbit.GeekServo2KG(robotbit.Servos.S2, 181)
    robotbit.GeekServo2KG(robotbit.Servos.S1, 181)
    basic.pause(3000)
    robotbit.GeekServo2KG(robotbit.Servos.S2, 0)
    robotbit.GeekServo2KG(robotbit.Servos.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    robotbit.MotorRun(robotbit.Motors.M2B, 255)
    robotbit.MotorRun(robotbit.Motors.M2A, 255)
    basic.pause(500)
    robotbit.MotorRun(robotbit.Motors.M2B, 158)
    robotbit.MotorRun(robotbit.Motors.M2A, 158)
    basic.pause(500)
    robotbit.MotorRun(robotbit.Motors.M2B, 63)
    robotbit.MotorRun(robotbit.Motors.M2A, 63)
    basic.pause(500)
    robotbit.MotorRun(robotbit.Motors.M2B, 0)
    robotbit.MotorRun(robotbit.Motors.M2A, 0)
})
