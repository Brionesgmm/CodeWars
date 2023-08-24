// answer
function encode(str, n) {
  let alphaArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let stringArr = str.split("");
  let strNumValArr = [];
  stringArr.forEach((el) => {
    strNumValArr.push(alphaArr.indexOf(el) + 1);
  });

  let keyArr = String(n).split("").map(Number);

  let encodedArr = strNumValArr.map((num, idx) => {
    let keyDigit = keyArr[idx % keyArr.length];
    return num + keyDigit;
  });

  return encodedArr;
}
