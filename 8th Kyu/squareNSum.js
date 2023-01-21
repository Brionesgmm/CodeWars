// answer
function squareSum(numbers) {
    return numbers.reduce((acc, c) => {
        return acc + c ** 2
    }, 0)
}