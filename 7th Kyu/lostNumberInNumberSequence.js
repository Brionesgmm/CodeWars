// answer
function findDeletedNumber(arr, mixArr) {
    let missingNumber = 0
    if (arr === mixArr) {
        missingNumber = 0
    } else {
        arr.forEach(el => {
            if (!mixArr.includes(el)) {
                missingNumber = el
            }
        })
    }
    return missingNumber
}