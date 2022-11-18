// answer
function digitize(n) {
    let reverseN = n.toString().split('').reverse()
    return reverseN.map(el => Number(el))
  }