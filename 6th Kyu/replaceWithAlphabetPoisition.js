// answer
function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");
  let alphabetPos = [];

  const textArr = text.toLowerCase().split("");

  textArr.forEach((el, index) => {
    if (alphabetArr.indexOf(el) !== -1) {
      alphabetPos.push(alphabetArr.indexOf(el) + 1);
    }
  });

  console.log(alphabetPos);

  return alphabetPos.join(" ");
}
