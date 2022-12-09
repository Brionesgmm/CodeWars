// answer
function XO(str) {
    let strArr = str.split('')
    let oArr = strArr.filter(el => {
        if (el.toLowerCase() == 'o') {
            return el
        }
    })

    let xArr = strArr.filter(el => {
        if (el.toLowerCase() == 'x') {
            return el
        }
    })

    if (xArr.length === oArr.length) {
        return true
    } else {
        return false
    }
}