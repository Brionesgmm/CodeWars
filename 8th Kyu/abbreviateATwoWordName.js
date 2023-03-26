// answer
function abbrevName(name) {
  let nameArray = name.split(" ");
  console.log(nameArray);
  return `${nameArray[0][0].toUpperCase()}.${nameArray[1][0].toUpperCase()}`;
}
