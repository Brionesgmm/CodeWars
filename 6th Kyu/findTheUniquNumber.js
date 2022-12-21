// answer
function findUniq(arr) {
    let sortArr = arr.sort((a, b) => a - b)
    if (sortArr[0] === sortArr[1]) {
        return sortArr[sortArr.length - 1]
    } else {
        return sortArr[0]
    }
}