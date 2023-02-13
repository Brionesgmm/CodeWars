// answer
function accum(s) {
    let letterArr = s.split('')
    let wordArr = letterArr.map((el, index) => {
        let word
        word = el.toUpperCase()
        for (let i = 0; i < index; i++) {
            word += el.toLowerCase()
        }
        return word
    })
    console.log(wordArr)

    return wordArr.join('-')
}