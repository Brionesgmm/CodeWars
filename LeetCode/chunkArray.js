// answer
var chunk = function (arr, size) {
  let resultArr = [];

  if (arr.length < 1) {
    return arr;
  } else if (size > arr.length) {
    resultArr.push(arr);
  } else {
    let start = 0;
    let end = size;
    for (let i = 0; i < arr.length; i += size) {
      resultArr.push(arr.slice(start, end));
      if (arr.slice(start, end).length < size) {
        i = arr.length;
      }
      start = start + size;
      end = end + size;
    }

    return resultArr;
  }

  return resultArr;
};
