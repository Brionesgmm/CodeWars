// answer
function findLongest(array) {
    let numbersLength = array.map(el => el.toString().length).sort((a, b) => b - a)

    return array.find(el => {
        if (el.toString().length === numbersLength[0]) {
            return el
        }
    })
}