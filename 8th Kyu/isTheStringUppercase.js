// answer
String.prototype.isUpperCase = function () {
  let allCaps = true;
  this.replace(/\s/g, "")
    .split("")
    .forEach((el) => {
      if (el !== el.toUpperCase()) {
        allCaps = false;
      }
    });

  return allCaps;
};
