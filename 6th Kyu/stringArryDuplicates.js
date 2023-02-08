// answer
function dup(s) {
    return s.map(el => {
        let count = 1
        let letterArr = el.split('')
        return letterArr.filter(el => {
            if (el !== letterArr[count]) {
                count++
                return el
            } else {
                count++
            }
        }).join('')
    })
};