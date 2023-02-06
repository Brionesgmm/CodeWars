// answer
function sortArray(array) {
    let count = -1
    let startArr = [...array]
    let oddArr = array.sort((a, b) => a - b).filter(el => {
        if (el % 2 !== 0) {
            return el
        }
    })

    return startArr.map(el => {
        if (el % 2 !== 0) {
            count++
            return oddArr[count]
        } else {
            return el
        }
    })
}