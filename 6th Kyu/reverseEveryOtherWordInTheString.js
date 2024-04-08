// answer
function reverse(str) {
  return str
    .split(" ")
    .map((el, i) => {
      if (i % 2 !== 0) {
        return el.split("").reverse().join("");
      } else {
        return el;
      }
    })
    .join(" ")
    .trim();
}
