// answer
function solve(arr) {
    let noDuplicateArr = arr.map(el => {
        return [...new Set(el)]
    })

    return noDuplicateArr.reduce((acc, c) => {
        return c.length * acc
    }, 1)
};