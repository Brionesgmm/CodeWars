// answer
function isPangram(string) {
    let stringArr = string.toLowerCase().split('')
    let letterArr = stringArr.filter(char => char.match(/[a-z]/)).sort()
    let lettersSet = new Set(letterArr)
    console.log(lettersSet)
    if (lettersSet.size === 26) {
        return true
    } else {
        return false
    }
}