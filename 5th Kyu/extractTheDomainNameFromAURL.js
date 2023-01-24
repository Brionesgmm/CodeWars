// answer
function domainName(url) {
    let newStr = url.replace(/(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www)/, '')
    let splitStr = newStr.split('.')
    if (splitStr[0] === '') {
        return splitStr[1]
    } else {
        return splitStr[0]
    }
}