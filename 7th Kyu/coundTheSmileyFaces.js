// answer
function countSmileys(arr) {
    const validEyes = [':', ';']
    const validNoses = ['-', '~']
    const validMouths = [')', 'D']
    let count = 0

    for (const face of arr) {
        if (face.length === 2 && validEyes.includes(face[0]) && validMouths.includes(face[1])) {
            count++
        } else if (face.length === 3 && validEyes.includes(face[0]) && validNoses.includes(face[1]) && validMouths.includes(face[2])) {
            count++
        }
    }

    return count
}