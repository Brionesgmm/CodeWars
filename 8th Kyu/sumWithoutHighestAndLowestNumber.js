// answer
function sumArray(array) {
  if (!Array.isArray(array)) {
    return 0;
  } else {
    const sortedArr = array.sort((a, b) => a - b);
    const portion = sortedArr.slice(1, sortedArr.length - 1);
    const sum = portion.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  }
}
