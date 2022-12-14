// answer
function oddOrEven(array) {

    let totalSum = array.reduce((acc, c) => acc + c, 0)

    if (totalSum === 0) {
        return 'even'
    } else if (totalSum % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}