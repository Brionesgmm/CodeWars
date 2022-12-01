// answer
function squareDigits(num) {
    let digits = num.toString().split('')

    let squDigits = digits.map(el => {
        return el * el
    })

    let str = squDigits.join('')
    return Number(str)
}