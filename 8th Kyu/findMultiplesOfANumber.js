// answer
function findMultiples(integer, limit) {
  let multArr = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      multArr.push(i);
    }
  }
  return multArr;
}
