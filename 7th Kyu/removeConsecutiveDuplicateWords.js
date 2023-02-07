// answer
const removeConsecutiveDuplicates = s => {
    let count = 1
    let wordsArr = s.split(' ')
    return wordsArr.filter(el => {
        if (el !== wordsArr[count]) {
            count++
            return el
        } else {
            count++
        }
    }).join(' ')
}