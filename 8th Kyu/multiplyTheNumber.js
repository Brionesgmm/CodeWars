// answer
function multiply(number) {
  return number * 5 ** String(Math.abs(number)).split("").length;
}
