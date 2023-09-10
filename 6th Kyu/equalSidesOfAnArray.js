// answer
function findEvenIndex(arr) {
  let indexNum;

  arr.some((el, ind) => {
    if (ind === 0) {
      const rightVal = arr.slice(1).reduce((acc, c) => {
        return acc + c;
      }, 0);
      if (0 === rightVal) {
        indexNum = ind;
        return true;
      }
    } else {
      const leftVal = arr.slice(0, ind).reduce((acc, c) => {
        return acc + c;
      }, 0);
      const rightVal = arr.slice(ind + 1).reduce((acc, c) => {
        return acc + c;
      }, 0);
      console.log(leftVal, rightVal);
      if (leftVal === rightVal) {
        indexNum = ind;
        return true;
      } else {
        indexNum = -1;
      }
    }
  });

  return indexNum;
}
