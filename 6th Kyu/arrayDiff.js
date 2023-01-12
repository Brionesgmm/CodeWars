// answer
function arrayDiff(a, b) {
    return a.filter(num => {
        return !b.includes(num)
    })
}