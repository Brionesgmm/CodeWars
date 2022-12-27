// answer
function dontGiveMeFive(start, end) {
    let numArr = []
    for (let i = start; i <= end; i++) {
        if (!(i + '').includes('5')) {
            numArr.push(i)
        }
    }
    return numArr.length
}