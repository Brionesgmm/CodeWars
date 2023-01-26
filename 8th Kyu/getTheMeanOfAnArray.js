// answer
function getAverage(marks) {
    let sum = marks.reduce((acc, c) => {
        return acc + c
    }, 0)

    return Math.floor(sum / marks.length)
}