// answer
function removeUrlAnchor(url) {
    let indexAnchor = url.indexOf('#')
    if (indexAnchor === -1) {
        return url
    } else {
        return url.slice(0, indexAnchor)
    }
}