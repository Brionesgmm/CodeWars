// answer
function removeExclamationMarks(s) {
    let strArr = s.split('')
    let removeExArr = strArr.filter(el => {
        return el !== '!'
    })
    return removeExArr.join("")
}