function highestRank(arr) {
  const sortArr = arr.sort((a, b) => a - b);
  let count1 = 0;
  let highNumber = 0;
  console.log(sortArr);

  sortArr.forEach((el) => {
    if (count1 > 0) {
      if (sortArr.lastIndexOf(el) - sortArr.indexOf(el) + 1 > count1) {
        highNumber = el;
        count1 = sortArr.lastIndexOf(el) - sortArr.indexOf(el) + 1;
      } else if (sortArr.lastIndexOf(el) - sortArr.indexOf(el) + 1 === count1) {
        highNumber = el > highNumber ? el : highNumber;
      }
    } else if (count1 === 0) {
      count1 = sortArr.lastIndexOf(el) - sortArr.indexOf(el) + 1;
      highNumber = el;
    }
  });

  return highNumber;
}
