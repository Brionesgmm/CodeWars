// answer
multiplicationTable = function (size) {
    let multipleArray = []
    let storeArray = []
    for (let i = 1; i <= size; i++) {
        storeArray = []
        for (let j = 1; j <= size; j++) {
            storeArray.push(j * i)
        }
        multipleArray.push(storeArray)
    }
    return multipleArray
}