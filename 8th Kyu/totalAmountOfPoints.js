// answer
function points(games) {
  let score = 0;
  games.forEach((el) => {
    const elParts = el.split("");
    if (elParts[0] > elParts[2]) {
      score = score + 3;
    } else if (elParts[0] < elParts[2]) {
      score;
    } else {
      score = score + 1;
    }
  });
  return score;
}
