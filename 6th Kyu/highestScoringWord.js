// answer
function high(x) {
  const xArr = x.split(" ");
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");

  const wordSums = xArr.map((el) => {
    return el
      .split("")
      .map((letter) => {
        return alphabetArr.indexOf(letter) + 1;
      })
      .reduce((acc, c) => {
        return acc + c;
      }, 0);
  });

  console.log(wordSums);

  let highestWordScore = wordSums[0];

  for (let i = 1; i < wordSums.length; i++) {
    if (wordSums[i] > highestWordScore) {
      highestWordScore = wordSums[i];
    }
  }

  return xArr[wordSums.indexOf(highestWordScore)];
}
