// answer
function averageLength(arr) {
    let length = Math.round(arr.reduce((acc, c) => {
        return acc + c.length
    }, 0) / arr.length)
    console.log(length)
    return arr.map(el => {
        let character = ''
        for (let i = 1; i <= length; i++) {
            character += el.charAt(0)
        }
        console.log(character)
        return character
    })
}