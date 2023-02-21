// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseString(str) {
    let word = str
    let strReverse = []
    for(let i = word.length - 1; i >= 0; i--){
        strReverse.push(word[i])
        console.log(strReverse)
    }

    return strReverse.join('')
}

reverseString('cow')