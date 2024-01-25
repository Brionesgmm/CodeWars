// answer
function toWeirdCase(string) {
  const weirdString = string
    .split(" ")
    .map((el) => {
      return el
        .split("")
        .map((letter, i) => {
          if (i % 2 === 0) {
            return letter.toUpperCase();
          } else {
            return letter;
          }
        })
        .join("");
    })
    .join(" ");
  return weirdString;
}
