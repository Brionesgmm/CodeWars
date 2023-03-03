// answer
function rowWeights(array) {
    let team1 = []
    let team2 = []
    array.forEach((el, index) => {
        if (index % 2 === 0) {
            team1.push(el)
        } else {
            team2.push(el)
        }
    })
    console.log(team1)
    console.log(team2)
    let team1Weight = team1.reduce((acc, c) => {
        return acc + c
    }, 0)
    let team2Weight = team2.reduce((acc, c) => {
        return acc + c
    }, 0)

    return [team1Weight, team2Weight]
}