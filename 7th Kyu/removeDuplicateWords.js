// answer
function removeDuplicateWords(s) {
    let noRepeatArr = []
    let sArr = s.split(' ')
    sArr.forEach(el => {
        if (!noRepeatArr.includes(el)) {
            noRepeatArr.push(el)
        }
    })
    return noRepeatArr.join(' ')
}