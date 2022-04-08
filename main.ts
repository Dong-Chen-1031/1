radio.onReceivedValue(function (name, value) {
    if (name == "false") {
        soundExpression.giggle.playUntilDone()
    }
})
function 關窗戶 () {
    for (let index = 0; index < 4; index++) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).scrollImage(-1, 200)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    窗戶開著 = false
}
function 開窗戶 () {
    for (let index = 0; index < 4; index++) {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).scrollImage(1, 200)
    }
    窗戶開著 = true
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
let 窗戶開著 = false
radio.setGroup(4)
窗戶開著 = true
basic.forever(function () {
    if (input.soundLevel() > 120) {
        if (窗戶開著) {
            關窗戶()
        }
    } else if (input.soundLevel() < 100) {
        if (!(窗戶開著)) {
            開窗戶()
        }
    }
})
