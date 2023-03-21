// answer
function removeEveryOther(arr) {
    return arr.filter((el, index) => {
        if (index % 2 === 0) {
            return el
        }
    })
}