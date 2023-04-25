// answer
function digitize(n) {
  return n
    .toString()
    .split("")
    .map((el) => Number(el));
}
