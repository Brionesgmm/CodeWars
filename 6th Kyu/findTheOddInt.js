// answer
function findOdd(A) {
  const sortA = A.sort((a, b) => a - b);
  let oddNum;
  console.log(sortA);
  for (let i = 0; i < sortA.length; i++) {
    let count;
    count = sortA.lastIndexOf(sortA[i]) - sortA.indexOf(sortA[i]) + 1;
    console.log(count);
    if (count % 2 !== 0) {
      oddNum = sortA[i];
    }
  }
  return oddNum;
}
