// answer
function nbDig(n, d) {
    let numsArr = []
    for (let i = 0; i <= n; i++) {
        numsArr.push(i * i)
    }
    let allNumsArr = numsArr.join('').split('')

    let count = 0

    allNumsArr.forEach(el => {
        if (Number(el) === d) {
            count++
        }
    })
    return count
}