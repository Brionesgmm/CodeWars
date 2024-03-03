// answer
function firstNonConsecutive(arr) {
  let number = null;
  arr.forEach((el, i) => {
    if (i === 0) {
      return;
    }
    if (el - 1 !== arr[i - 1]) {
      number = el;
    }
  });
  return number;
}
