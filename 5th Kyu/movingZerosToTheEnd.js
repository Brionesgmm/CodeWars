// answer
function moveZeros(arr) {
    let arrLength = arr.length
    let nonZeroLength
    let nonZeroArr = []
    arr.forEach(el => {
        if (el !== 0 || el === false || el === null) {
            console.log(el)
            nonZeroArr.push(el)
        }
    })
    nonZeroLength = nonZeroArr.length
    console.log(nonZeroArr)
    let numZeros = arrLength - nonZeroLength
    for (let i = 0; i < numZeros; i++) {
        nonZeroArr.push(0)
    }
    return nonZeroArr
}