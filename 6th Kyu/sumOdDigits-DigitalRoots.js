// answer
function digitalRoot(n) {
    let totalSum = n.toString().split('').reduce((acc, c) => {
        return Number(acc) + Number(c)
    }, 0)

    for (let i = 0; totalSum > 9; i++) {
        totalSum = totalSum.toString().split('').reduce((acc, c) => {
            return Number(acc) + Number(c)
        }, 0)
    }
    return totalSum
}