// answer
function arrayPlusArray(arr1, arr2) {
  return (
    arr1.reduce((acc, c) => {
      return acc + c;
    }, 0) +
    arr2.reduce((acc, c) => {
      return acc + c;
    }, 0)
  );
}
