// answer
function correct(string) {
  return string
    .split("")
    .map((el) => {
      if (el === "0") {
        return "O";
      } else if (el === "5") {
        return "S";
      } else if (el === "1") {
        return "I";
      } else {
        return el;
      }
    })
    .join("");
}
