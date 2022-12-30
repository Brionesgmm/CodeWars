// answer
function sumDigits(number) {
    let numArr = number.toString().split('')
    let finalNumArr = numArr.filter(el => {
        if (el == '-') {} else {
            return el
        }
    })
    let result = finalNumArr.reduce((acc, c) => {
        if (c == '-') {} else {
            return acc + Number(c)
        }
    }, 0)
    return result
}