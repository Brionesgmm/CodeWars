// answer
function openOrSenior(data) {
  let results = data.map((el) => {
    if (el[0] >= 55 && el[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });

  return results;
}
