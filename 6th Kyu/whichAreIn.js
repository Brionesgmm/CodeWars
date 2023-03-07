// answer
function inArray(array1, array2) {
    let subArr = []
    array2.forEach(el => {
        for (let i = 0; i < array1.length; i++) {
            if (el.includes(array1[i])) {
                subArr.push(array1[i])
            }
        }
    })
    return [...new Set(subArr.sort())]
}