// answer
function remove(string) {
  let stringArr = string.split("");

  while (stringArr[stringArr.length - 1] === "!") {
    stringArr.pop();
  }
  return stringArr.join("");
}
