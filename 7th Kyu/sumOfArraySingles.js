// answer
function repeats(arr) {
    let filterArr = arr.filter(el => {
        if (arr.indexOf(el) === arr.lastIndexOf(el)) {
            return el
        }
    })

    return filterArr.reduce((acc, c) => {
        return acc + c
    }, 0)
};