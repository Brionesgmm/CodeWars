// answer
function bump(x) {
    let bumpArray = x.split('').filter(el => {
        if (el === 'n') {
            return el
        }
    })
    if (bumpArray.length <= 15) {
        return 'Woohoo!'
    } else {
        return 'Car Dead'
    }
}