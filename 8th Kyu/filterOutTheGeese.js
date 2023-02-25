// answer
function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let result = birds.filter(el => {
        if (!geese.includes(el)) {
            return el
        }
    })
    return result
};