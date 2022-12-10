// answer
function sumTwoSmallestNumbers(numbers) {
    let sortNums = numbers.sort((a, b) => a - b)
    return sortNums[0] + sortNums[1]
}