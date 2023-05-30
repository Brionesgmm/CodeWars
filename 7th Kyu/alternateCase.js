// answer
function alternateCase(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}
