// answer
function flattenAndSort(array) {
    let sortArray = array.reduce((acc, c) => {
        c.sort((a, b) => a - b)
        return acc.concat(c)
    }, [])
    console.log(sortArray)
    return sortArray.sort((a, b) => a - b);
}