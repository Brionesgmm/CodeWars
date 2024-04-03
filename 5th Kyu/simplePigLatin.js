// answer
function pigIt(str) {
  return str
    .split(" ")
    .map((el) => {
      if (/^[A-Za-z]+$/.test(el)) {
        const firstLetter = el[0];
        const pigWord = el.slice(1) + firstLetter + "ay";
        return pigWord;
      } else {
        return el;
      }
    })
    .join(" ");
}
