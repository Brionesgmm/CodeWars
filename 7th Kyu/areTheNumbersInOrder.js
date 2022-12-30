// answer
function inAscOrder(arr) {
    if (arr.toString() == arr.sort((a, b) => a - b).toString()) {
        return true
    } else {
        return false
    }
}