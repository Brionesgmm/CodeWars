// answer
function isPythagoreanTriple(integers) {
    if (integers[0] ** 2 + integers[1] ** 2 === integers[2] ** 2) {
        return true
    } else if (integers[1] ** 2 + integers[2] ** 2 === integers[0] ** 2) {
        return true
    } else if (integers[0] ** 2 + integers[2] ** 2 === integers[1] ** 2) {
        return true
    } else {
        return false
    }
}