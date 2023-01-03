// answer
function countDevelopers(list) {
    let europeArr = list.filter(el => {
        if (el.continent === 'Europe' && el.language === 'JavaScript') {
            return el
        }
    })
    return europeArr.length
}