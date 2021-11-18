function heart () {
    list = [
    [
    0,
    1,
    0,
    1,
    0
    ],
    [
    1,
    0,
    1,
    0,
    1
    ],
    [
    1,
    0,
    0,
    0,
    1
    ],
    [
    0,
    1,
    0,
    1,
    0
    ],
    [
    0,
    0,
    1,
    0,
    0
    ]
    ]
    for (let b = 0; b <= 4; b++) {
        for (let a = 0; a <= 4; a++) {
            if (list[b][a] == 1) {
                led.plot(a, b)
            } else {
                led.unplot(a, b)
            }
        }
    }
    basic.pause(100)
}
let list: number[][] = []
heart()
basic.pause(100)
