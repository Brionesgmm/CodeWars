// Answer
function getCount(str) {
    let count = 0
    let strArr = str.split('')
    strArr.forEach(el => {
        if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
            count++
        }
    })
    return count
}