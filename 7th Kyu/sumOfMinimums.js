// answer
function sumOfMinimums(arr) {
    let numberArr = arr.map(el => {
        return Math.min(...el)
    })
    console.log(numberArr)

    return numberArr.reduce((acc, c) => {
        return acc + c
    }, 0)
}