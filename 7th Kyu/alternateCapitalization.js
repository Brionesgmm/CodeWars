// answer
function capitalize(s) {
  const sArray = s.split("");
  const capEvenArray = [];
  const capOddArray = [];

  sArray.forEach((el, i) => {
    if (i % 2 === 0) {
      capEvenArray.push(el.toUpperCase());
    } else {
      capEvenArray.push(el);
    }
  });

  sArray.forEach((el, i) => {
    if (i % 2 !== 0) {
      capOddArray.push(el.toUpperCase());
    } else {
      capOddArray.push(el);
    }
  });

  return [capEvenArray.join(""), capOddArray.join("")];
}
