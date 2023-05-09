// answer
function replace(s) {
  const sArr = s.split("");
  return sArr
    .map((el) => {
      if (
        el.toLowerCase() === "a" ||
        el.toLowerCase() === "e" ||
        el.toLowerCase() === "i" ||
        (el.toLowerCase() === "o") | (el.toLowerCase() === "u")
      ) {
        return "!";
      } else {
        return el;
      }
    })
    .join("");
}
