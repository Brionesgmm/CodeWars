// answer

var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) {
      return x;
    } else {
      let value = x;

      for (let i = functions.length - 1; i >= 0; i--) {
        value = functions[i](value);
      }
      return value;
    }
  };
};
