// answer
var number = function (array) {
    let numArr = array.map((el, i) => {
        return `${i +1}: ${el}`
    })

    return numArr
}