// Answer
function isPalindrome(x) {
    let reverseX = x.split('').reverse().join('')
    if (x.toLowerCase() == reverseX.toLowerCase()) {
        return true
    } else {
        return false
    }
}