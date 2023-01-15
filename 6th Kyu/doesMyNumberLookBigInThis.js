// answer
function narcissistic(value) {
    let valueStr = value.toString().split('')
    let result = valueStr.reduce((acc, c) => {
        return Number(c) ** valueStr.length + acc
    }, 0)

    if (result == value) {
        return true
    } else {
        return false
    }
}