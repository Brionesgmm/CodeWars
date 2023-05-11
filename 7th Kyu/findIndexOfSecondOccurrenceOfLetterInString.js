// answer
function secondSymbol(s, letter) {
  let firstIndex = s.indexOf(letter);
  let secondIndex = s.indexOf(letter, firstIndex + 1);

  if (secondIndex !== -1) {
    return secondIndex;
  } else {
    return -1;
  }
}
