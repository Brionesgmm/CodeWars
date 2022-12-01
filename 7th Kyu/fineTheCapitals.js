// answer
var capitals = function (word) {
    let wordArr = word.split("")
    let wordIndex = []
    let indexWordArr = wordArr.filter((el) => {
        if (el === el.toUpperCase()) {
            return el
        }
    })

    for (let i = 0; i < indexWordArr.length; i++) {
        wordIndex.push(word.indexOf(indexWordArr[i]))
    }

    return wordIndex
};