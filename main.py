def on_button_pressed_a():
    basic.show_leds("""
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        """)
    basic.show_leds("""
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    robotbit.motor_run(robotbit.Motors.M2B, 255)
    robotbit.motor_run(robotbit.Motors.M2A, 255)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_leds("""
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        """)
    basic.show_leds("""
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    robotbit.motor_run(robotbit.Motors.M2B, 0)
    robotbit.motor_run(robotbit.Motors.M2B, 0)
    robotbit.motor_run(robotbit.Motors.M2B, 0)
    robotbit.motor_run(robotbit.Motors.M2B, 0)
    robotbit.motor_run(robotbit.Motors.M2A, 0)
    robotbit.motor_run(robotbit.Motors.M2A, 0)
    robotbit.motor_run(robotbit.Motors.M2A, 0)
    robotbit.motor_run(robotbit.Motors.M2A, 0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_leds("""
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        """)
    basic.show_leds("""
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    robotbit.geek_servo2_kg(robotbit.Servos.S2, 360)
    robotbit.geek_servo2_kg(robotbit.Servos.S1, 360)
    basic.pause(2000)
    robotbit.geek_servo2_kg(robotbit.Servos.S2, 0)
    robotbit.geek_servo2_kg(robotbit.Servos.S1, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)
