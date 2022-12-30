// answer
function factorial(n) {
    let result = 1
    if (n < 0 || n > 12) {
        throw RangeError
    } else {
        for (let i = 1; i <= n; i++) {
            result = i * result
        }
    }
    return result
}