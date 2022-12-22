// answer
function spinWords(string) {
    let wordArr = string.split(" ")
    let reversedString = wordArr.map(el => {
        if (el.length >= 5) {
            let reverseEl = el.split('').reverse().join('')
            return reverseEl
        } else {
            return el
        }
    })
    return reversedString.join(' ')
}