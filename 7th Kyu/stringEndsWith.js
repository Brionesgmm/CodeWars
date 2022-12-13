// answer
function solution(str, ending) {
    let endingLength = ending.length
    let strEnd = str.slice(-endingLength)
    if (ending == '') {
        return true
    } else if (strEnd == ending) {
        return true
    } else {
        return false
    }
}