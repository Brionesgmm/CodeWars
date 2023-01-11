// answer
function switcheroo(x) {
    return x.split('').map(el => {
        if (el === 'a') {
            return 'b'
        } else if (el === 'b') {
            return 'a'
        } else {
            return el
        }
    }).join('')
}