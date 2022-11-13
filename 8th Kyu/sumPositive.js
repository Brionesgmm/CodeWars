// answer
function positiveSum(arr) {
    let total = arr.reduce((acc, v) => {
        if (v < 0) {
            return acc + 0
        } else {
            return acc + v
        }
    }, 0)
    return total
}