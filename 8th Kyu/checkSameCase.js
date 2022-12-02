// answer
function sameCase(a, b) {
    if (!(/[a-zA-Z]/).test(a) || !(/[a-zA-Z]/).test(b)) {
        return -1
    } else if ((a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() && b === b.toLowerCase())) {
        return 1
    } else if (typeof a === typeof b) {
        return 0
    }
}