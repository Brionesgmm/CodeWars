// answer
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((el) => {
    if (el) {
      return el;
    }
  }).length;
}
