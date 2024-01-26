// answer
String.prototype.camelCase = function () {
  return this.split(" ")
    .map((el, i) => {
      return el
        .split("")
        .map((letter, index) => {
          if (index === 0) {
            return letter.toUpperCase();
          } else {
            return letter;
          }
        })
        .join("");
    })
    .join("");
};
