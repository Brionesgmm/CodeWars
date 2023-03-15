// answer
function grabscrab(anagram, dictionary) {
    let meantWords = []
    let sortAna = anagram.split('').sort().join('')
    dictionary.forEach(el => {
        if (el.split('').sort().join('') === sortAna) {
            meantWords.push(el)
        }
    })

    return meantWords
}