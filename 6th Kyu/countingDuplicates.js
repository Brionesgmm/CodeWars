// answer
function duplicateCount(text) {
  let duplicateChar = [];
  let textArr = text.split("").map((el) => el.toLowerCase());
  textArr.forEach((el) => {
    if (textArr.indexOf(el) != textArr.lastIndexOf(el)) {
      duplicateChar.push(el);
    }
  });
  const duplicateArr = [...new Set(duplicateChar)];
  return duplicateArr.length;
}
