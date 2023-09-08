// answer
function tribonacci(signature, n) {
  let triboArr = [];

  if (n <= 3) {
    for (let i = 0; i < n; i++) {
      triboArr.push(signature[i]);
    }
  } else {
    for (let i = 0; i < n; i++) {
      if (i <= 2) {
        triboArr.push(signature[i]);
      } else {
        const newVal =
          triboArr[triboArr.length - 1] +
          triboArr[triboArr.length - 2] +
          triboArr[triboArr.length - 3];
        triboArr.push(newVal);
      }
    }
  }

  return triboArr;
}
