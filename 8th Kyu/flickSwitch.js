// answer
function flickSwitch(arr) {
  let flickOff = true;
  let boolArr = [];

  arr.forEach((el) => {
    if (el === "flick") {
      flickOff = !flickOff;
    }
    if (flickOff) {
      boolArr.push(true);
    } else {
      boolArr.push(false);
    }
  });
  return boolArr;
}
