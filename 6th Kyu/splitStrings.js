// answer
function solution(str) {
    let strArr = str.split('')
    let pairArr = []
    if (strArr.length % 2 !== 0) {
        strArr.push('_')
    }

    for (let i = 0; i < strArr.length; i += 2) {
        pairArr.push(strArr[i] + strArr[i + 1])
    }
    return pairArr
}