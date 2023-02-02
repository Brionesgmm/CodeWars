// answer
function last(x) {
    return x.split(' ').sort((a, b) => {
        const lastCharA = a[a.length - 1]
        const lastCharB = b[b.length - 1]
        if (lastCharA < lastCharB) {
            return -1
        } else if (lastCharA > lastCharB) {
            return 1
        } else {
            return 0
        }
    });
}