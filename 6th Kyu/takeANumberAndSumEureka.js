// answer
function sumDigPow(a, b) {
  let eArray = [];
  for (let i = a; i <= b; i++) {
    let numbers = i.toString().split("").map(Number);
    const total = numbers.reduce((acc, c, index) => {
      return acc + c ** (index + 1);
    }, 0);

    if (i == total) {
      eArray.push(i);
    }
  }
  return eArray;
}
