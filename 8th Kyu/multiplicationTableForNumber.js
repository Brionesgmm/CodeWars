// answer
function multiTable(number) {
  let multTable = "";
  for (let i = 1; i <= 10; i++) {
    if (i === 10) {
      multTable = multTable + `${i} * ${number} = ${i * number}`;
    } else {
      multTable = multTable + `${i} * ${number} = ${i * number}` + "\n";
    }
  }
  return multTable;
}
