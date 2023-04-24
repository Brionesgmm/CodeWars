// answer
function sumCubes(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i ** 3;
  }

  return total;
}
