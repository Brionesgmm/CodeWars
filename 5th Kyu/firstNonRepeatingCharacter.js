// answer
function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (
      s.toLowerCase().indexOf(char.toLowerCase()) ===
      s.toLowerCase().lastIndexOf(char.toLowerCase())
    ) {
      return char;
    }
  }

  return "";
}
