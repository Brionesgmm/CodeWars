// answer
function printerError(s) {
    let alphaArr = 'nopqrstuvwxyz'.split('')
    let sArr = s.split('')
    let count = 0
    sArr.forEach(el => {
        for (let i = 0; i < alphaArr.length; i++) {
            if (el === alphaArr[i]) {
                count++
            }
        }
    })
    return `${count}/${s.length}`
}