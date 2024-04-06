// answer
function partsSums(ls) {
  let sumArr = [];
  const sumTotal = ls.reduce((acc, c) => acc + c, 0);
  let currentSum = sumTotal;

  sumArr.push(currentSum);

  ls.forEach((el) => {
    currentSum -= el;
    sumArr.push(currentSum);
  });

  return sumArr;
}
