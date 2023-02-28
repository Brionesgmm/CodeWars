// answer
function minimumSum(values, n) {
    if (values.length === 0 || n === 0) {
      return 0;
    }
    n = Math.min(n, values.length)
    let sortedValues = values.sort((a, b) => a - b)
    let sum = sortedValues.slice(0, n).reduce((acc, c) => acc + c, 0)
    return sum
  }
  
  function maximumSum(values, n) {
    if (values.length === 0 || n === 0) {
      return 0
    }
    n = Math.min(n, values.length);
    let sortedValues = values.sort((a, b) => b - a);
    let sum = sortedValues.slice(0, n).reduce((acc, c) => acc + c, 0)
    return sum
  }
  