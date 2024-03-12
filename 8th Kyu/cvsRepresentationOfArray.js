// answer
function toCsvText(array) {
  let cvs = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      cvs = cvs + array[i].join(",");
    } else {
      cvs = cvs + array[i].join(",") + "\n";
    }
  }
  return cvs;
}
