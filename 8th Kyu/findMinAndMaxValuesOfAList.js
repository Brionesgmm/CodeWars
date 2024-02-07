// answer
var min = function (list) {
  let sortList = list.sort((a, b) => a - b);
  let min = sortList[0];

  return min;
};

var max = function (list) {
  let sortList = list.sort((a, b) => a - b);
  let max = sortList[sortList.length - 1];

  return max;
};
