// answer
function findOutlier(integers) {
  let evenArr = [];
  let oddArr = [];

  integers.forEach((el) => {
    if (el % 2 === 0) {
      evenArr.push(el);
    } else {
      oddArr.push(el);
    }
  });

  if (evenArr.length > 1) {
    return oddArr[0];
  } else {
    return evenArr[0];
  }
}
