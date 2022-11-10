// Answer   
var countSheep = function (num) {
    let numSheep = ''
    for (let i = 1; i <= num; i++) {
        numSheep += `${i} sheep...`
    }
    return numSheep
}