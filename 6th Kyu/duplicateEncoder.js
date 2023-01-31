// answer
function duplicateEncode(word) {
    let wordArr = word.toLowerCase().split('')
    return wordArr.map(el => {
        if (wordArr.lastIndexOf(el) === wordArr.indexOf(el)) {
            return `(`
        } else {
            return `)`
        }
    }).join('')
}