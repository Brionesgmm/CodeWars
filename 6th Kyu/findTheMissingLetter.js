// answer
function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const lowerCaseArr = array.map((el) => el.toLowerCase());
  const letterArr = alphabet.slice(
    alphabet.indexOf(lowerCaseArr[0]),
    alphabet.indexOf(lowerCaseArr[lowerCaseArr.length - 1]) + 1
  );
  let missingLetter;

  letterArr.forEach((el) => {
    if (!lowerCaseArr.includes(el)) {
      if (lowerCaseArr[0] === array[0]) {
        missingLetter = el;
      } else {
        missingLetter = el.toUpperCase();
      }
    }
  });

  return missingLetter;
}
