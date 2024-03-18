// answer
function well(x) {
  let count = 0;

  x.forEach((el) => {
    if (el === "good") {
      count = count + 1;
    }
  });

  if (count > 2) {
    return "I smell a series!";
  } else if (count >= 1) {
    return "Publish!";
  } else {
    return "Fail!";
  }
}
