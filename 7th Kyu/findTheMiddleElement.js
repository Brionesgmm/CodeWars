// answer
function gimme(triplet) {
    let sortTriplet = [...triplet]
    let middleValue = sortTriplet.sort((a, b) => a - b)[1]
    return triplet.indexOf(middleValue)
}