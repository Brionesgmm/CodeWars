// answer
function digPow(n, p) {
  const splitNumber = n.toString().split("").map(Number);
  const total = splitNumber.reduce((acc, c, index) => {
    return c ** (p + index) + acc;
  }, 0);
  console.log(total);
  if (total % n === 0) {
    return total / n;
  } else {
    return -1;
  }
}
