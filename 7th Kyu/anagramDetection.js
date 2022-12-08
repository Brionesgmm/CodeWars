// answer
var isAnagram = function (test, original) {
    let testStr = test.toLowerCase().split('').sort().join('')
    let originalStr = original.toLowerCase().split('').sort().join('')

    if (testStr == originalStr) {
        return true
    } else {
        return false
    }
};