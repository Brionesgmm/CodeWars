// answer
function reverseLetter(str) {
    let strAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arrAlphabet = strAlphabet.split('')
    let strArr = str.split('').filter(el => {
        for (let i = 0; i < arrAlphabet.length; i++) {
            if (el === arrAlphabet[i]) {
                return el
            }
        }
    })
    return strArr.reverse().join('')
}