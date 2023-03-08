// answer
function mineLocation(field) {
    let mineArr = []
    field.forEach((el, ind) => {
        if (el.includes(1)) {
            mineArr.push(ind)
            mineArr.push(el.indexOf(1))
        }
    })

    return mineArr
}