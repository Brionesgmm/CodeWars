// answer
function solve(arr) {
  const result = [];
  const seen = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    if (!seen[num]) {
      seen[num] = true;
      result.unshift(num);
    }
  }

  return result;
}
