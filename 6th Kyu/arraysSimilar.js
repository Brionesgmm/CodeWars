// asnwer
function arraysSimilar(arr1, arr2) {
    if (JSON.stringify(arr1.sort((a, b) => a - b)) === JSON.stringify(arr2.sort((a, b) => a - b))) {
        return true
    } else {
        return false
    }
}