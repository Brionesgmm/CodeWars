// answer
function twoSum(numbers, target) {
  let indArray = [];
  numbers.forEach((el, ind) => {
    for (let i = ind + 1; i < numbers.length; i++) {
      console.log(numbers[i]);

      if (el + numbers[i] === target) {
        indArray.push(ind);
        indArray.push(i);
        console.log(indArray);
      }
    }
  });
  return indArray;
}
