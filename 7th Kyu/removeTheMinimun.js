// answer
function removeSmallest(numbers) {
    let sortArr = numbers.slice().sort((a, b) => a - b)
    let numCopy = numbers.slice()
    numCopy.splice(numbers.indexOf(sortArr[0]), 1)
    return numCopy
}