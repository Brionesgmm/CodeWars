// answer
function largestPairSum(numbers) {
    let sortNumbers = numbers.sort((a, b) => a - b)
    return sortNumbers[numbers.length - 1] + sortNumbers[numbers.length - 2]
}