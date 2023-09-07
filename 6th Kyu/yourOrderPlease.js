// answer
function order(words) {
  const wordsArr = words.split(" ");
  let orderWordsArr = [];
  for (let i = 1; i <= wordsArr.length; i++) {
    wordsArr.forEach((el) => {
      if (el.includes(i)) {
        return orderWordsArr.push(el);
      }
    });
  }

  return orderWordsArr.join(" ");
}
