// answer
function createPhoneNumber(numbers) {
    let first3Digits = numbers.slice(0, 3).join('')
    let middle3Digits = numbers.slice(3, 6).join('')
    let last3Digits = numbers.slice(6).join('')

    return `(${first3Digits}) ${middle3Digits}-${last3Digits}`
}