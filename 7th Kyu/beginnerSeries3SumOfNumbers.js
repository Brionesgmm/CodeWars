// answer
function getSum(a, b) {
    let high
    let low
    if (a > b) {
        high = a
        low = b
    } else {
        high = b
        low = a
    }
    let sum = 0
    for (let i = low; i <= high; i++) {
        sum += i
    }
    return sum
}