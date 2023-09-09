// answer
var uniqueInOrder = function (iterable) {
  let uniqueArr = [];

  if (typeof iterable === "string") {
    const iterArr = iterable.split("");

    iterArr.forEach((el, ind) => {
      if (el !== iterArr[ind + 1]) {
        uniqueArr.push(el);
      }
    });
  } else {
    iterable.forEach((el, ind) => {
      if (el !== iterable[ind + 1]) {
        uniqueArr.push(el);
      }
    });
  }
  console.log(uniqueArr);
  return uniqueArr;
};
