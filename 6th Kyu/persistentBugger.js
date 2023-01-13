// answer
function persistence(num) {
    let count = 0
    let number = num
    while (number > 9) {
        let digits = ('' + number).split('')
        number = digits.reduce((acc, c) => {
            return acc * Number(c)
        }, 1)
        count++
    }
    return count
}