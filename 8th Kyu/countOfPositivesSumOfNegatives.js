// answer
function countPositivesSumNegatives(input) {
  let posNum = 0;
  let negNum = 0;
  if (input === null) {
    return [];
  }
  if (input.length === 0) {
    return [];
  }

  input.forEach((el) => {
    if (el > 0) {
      posNum++;
    } else {
      negNum = negNum + el;
    }
  });
  return [posNum, negNum];
}
