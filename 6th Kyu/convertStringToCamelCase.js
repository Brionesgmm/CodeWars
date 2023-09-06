// answer
function toCamelCase(str) {
  const removedUndDashStr = str.replace(/_/g, " ").replace(/-/g, " ");

  const strArr = removedUndDashStr.split(" ").map((el, ind) => {
    if (ind === 0) {
      return el;
    } else {
      return el.charAt(0).toUpperCase() + el.slice(1);
    }
  });
  return strArr.join("");
}
