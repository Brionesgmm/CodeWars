// answer
function noOdds(values) {
  return values.filter((el) => {
    if (el % 2 === 0 || el === 0) {
      return true;
    }
  });
}
