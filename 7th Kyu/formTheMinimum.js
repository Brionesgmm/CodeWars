// answer
function minValue(values) {
  const sortValues = values.sort((a, b) => a - b);
  console.log(sortValues);
  const minNumber = sortValues.reduce((acc, c) => {
    if (!acc.includes(c)) {
      acc.push(c);
    }
    return acc;
  }, []);

  console.log(minNumber);
  return Number(minNumber.join(""));
}
