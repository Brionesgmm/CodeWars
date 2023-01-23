// answer
function generateHashtag(str) {
    str = str.trim()
    if (str.length === 0) {
        return false
    }
    let words = str.split(" ");
    let result = "#" + words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("")
    if (result.length > 140) {
        return false
    }
    return result
}