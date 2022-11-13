// answer
function pyramid(n) {
    let pyramidArray = []
    let strValue = ''
    for (let i = 0; i < n; i++) {
        strValue += '1'
        let arrValue = strValue.split('')
        let finalValue = arrValue.map(el => Number(el))
        pyramidArray.push(finalValue)
    }
    return pyramidArray
}