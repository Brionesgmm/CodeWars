// answer
function stringTransformer(str) {
    let strArr = str.split('')
    return caseArr = strArr.map(el => {
        if (el === el.toLowerCase()) {
            return el.toUpperCase()
        } else {
            return el.toLowerCase()
        }
    }).join('').split(' ').reverse().join(' ')
}