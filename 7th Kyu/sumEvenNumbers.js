// answer
function sumEvenNumbers(input) {
  let sum = 0;
  input.forEach((el) => {
    if (el % 2 === 0) {
      sum += el;
    }
  });

  return sum;
}
