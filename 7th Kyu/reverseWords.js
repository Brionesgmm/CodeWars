// answer
function reverseWords(str) {
    let arr = str.split(' ')

    let reverseArr = arr.map(el => {
        let arrWord = el.split('').reverse().join('')
        return arrWord
    })
    let reverseStr = reverseArr.join(' ')

    return reverseStr
}