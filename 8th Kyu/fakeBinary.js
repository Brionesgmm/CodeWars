// answer
function fakeBin(x) {
  const numArr = x.split("").map((el) => Number(el));
  return numArr
    .map((el) => {
      if (el < 5) {
        return 0;
      } else {
        return 1;
      }
    })
    .join("");
}
