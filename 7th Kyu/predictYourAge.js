// answer
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let array = [age1, age2, age3, age4, age5, age6, age7, age8]
    let result = array.reduce((acc, c) => {
        return (c * c) + acc
    }, 0)
    let finalResult = Math.floor(Math.sqrt(result) / 2)
    return finalResult
}