// answer
//Return the string in the description with the number of flies eaten for each frog.
function frogContest(n) {
  const tomN = Math.floor((n * (n + 1)) / 2 / 2);
  const catN = (n * (n + 1)) / 2 + (tomN * (tomN + 1)) / 2;
  return `Chris ate ${(n * (n + 1)) / 2} flies, Tom ate ${
    (tomN * (tomN + 1)) / 2
  } flies and Cat ate ${(catN * (catN + 1)) / 2} flies`;
}
