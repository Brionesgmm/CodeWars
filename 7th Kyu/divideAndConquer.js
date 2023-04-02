// answer
function divCon(x) {
  let nonNumbers = 0;
  let numbers = 0;

  x.forEach((el) => {
    if (typeof el === "string") {
      nonNumbers += Number(el);
    } else {
      numbers += el;
    }
  });

  return numbers - nonNumbers;
}
