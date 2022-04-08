radio.onReceivedValue(function (name, value) {
    if (name == "false") {
        soundExpression.giggle.playUntilDone()
    }
})
radio.setGroup(4)
basic.forever(function () {
    if (input.soundLevel() > 120) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    } else {
        basic.clearScreen()
    }
})
