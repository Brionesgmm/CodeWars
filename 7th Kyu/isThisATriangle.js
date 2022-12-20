// answer
function isTriangle(a, b, c) {
    let triArray = [a, b, c]
    let sortTriArray = triArray.sort((a, b) => a - b)
    if (sortTriArray[0] + sortTriArray[1] > sortTriArray[2]) {
        return true
    } else {
        return false
    }
}