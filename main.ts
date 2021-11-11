function 正常 () {
    list2 = [
    0,
    1,
    0,
    1,
    0
    ]
    for (let index = 0; index <= 4; index++) {
        if (list2[index] == 1) {
            led.plot(index, 0)
        } else {
            led.unplot(index, 0)
        }
    }
}
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
}
let list: number[][] = []
let list2: number[] = []
heart()
basic.pause(100)
正常()
