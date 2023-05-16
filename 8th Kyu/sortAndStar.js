// answer
function twoSort(s) {
  const sortArr = s.sort();
  const firstElArr = sortArr[0].split("");

  let string = "";

  for (let i = 0; i < firstElArr.length - 1; i++) {
    string += firstElArr[i] + "***";
  }
  return string + firstElArr[firstElArr.length - 1];
}
