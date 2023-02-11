// answer
function highAndLow(numbers) {
    let numArray = numbers.split(' ').map(el => Number(el)).sort((a, b) => a - b)
    return `${numArray[numArray.length-1]} ${numArray[0]}`
}