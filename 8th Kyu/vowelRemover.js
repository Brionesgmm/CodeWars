// answer
function shortcut(string) {
  const vowelArr = ["a", "e", "i", "o", "u"];
  return string
    .split("")
    .filter((char) => !vowelArr.includes(char))
    .join("");
}
