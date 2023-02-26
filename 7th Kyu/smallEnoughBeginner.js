// answer
function smallEnough(a, limit) {
    return a.every(el => {
        if (el <= limit) {
            return true
        }
    })
}