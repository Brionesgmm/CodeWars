// answer
function count(string) {
    let stringArr = string.split('')
    let characterObjects = {}
    stringArr.forEach(el => {
        let count = 0
        for (let i = 0; i < stringArr.length; i++) {
            if (el === stringArr[i]) {
                count++
            }
        }
        console.log(count)
        characterObjects[`${el}`] = count
    })
    console.log(stringArr)
    console.log(characterObjects)
    return characterObjects
}