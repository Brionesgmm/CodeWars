// answer
function neutralise(s1, s2) {
  let str = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      str = str + `${s1[i]}`;
    } else {
      str = str + 0;
    }
  }
  return str;
}
