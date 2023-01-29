// answer
function evenNumbers(array, number) {
    return array.filter(el => {
        if (el % 2 === 0) {
            return el
        }
    }).slice(-number)
}