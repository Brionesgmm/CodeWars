// answer
var countBits = function (n) {
    const binary = n.toString(2).split('')
    let oneCount = binary.filter(el => {
        if (el === '1') {
            return el
        }
    })
    return oneCount.length
}