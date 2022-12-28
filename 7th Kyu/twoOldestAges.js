// answer
function twoOldestAges(ages) {
    let sortAges = ages.sort((a, b) => a - b)
    return [sortAges[sortAges.length - 2], sortAges[sortAges.length - 1]]
}