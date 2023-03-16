input.onPinPressed(TouchPin.P0, function () {
    t0 = input.runningTime()
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    t1 = input.runningTime()
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    d = t1 - t0
    basic.clearScreen()
    basic.showNumber(d)
    basic.showIcon(IconNames.SmallDiamond)
})
let d = 0
let t1 = 0
let t0 = 0
basic.showIcon(IconNames.SmallDiamond)
