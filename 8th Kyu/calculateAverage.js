// Answer
function findAverage(array) {
    if (array.length !== 0) {
        let sum = array.reduce((acc, c) => {
            return acc + c
        }, 0)

        return sum / array.length
    } else {
        return 0
    }
}