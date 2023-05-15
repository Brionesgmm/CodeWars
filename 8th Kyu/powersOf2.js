// answer
function powersOfTwo(n) {
  let listPowers = [];
  for (let i = 0; i <= n; i++) {
    listPowers.push(2 ** i);
  }
  return listPowers;
}
