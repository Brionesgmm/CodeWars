// answer
function disemvowel(str) {
    let noVowelArr = str.split('').filter(el => {
        if (el.toLowerCase() == 'a' || el.toLowerCase() == 'e' || el.toLowerCase() == 'i' || el.toLowerCase() == 'o' || el.toLowerCase() == 'u') {} else {
            return el
        }
    })
    return noVowelArr.join('')
}