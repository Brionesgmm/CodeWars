// answer
function spacey(array) {
  return array.reduce((acc, el) => {
    if (acc.length === 0) {
      acc.push(el);
    } else {
      acc.push(acc[acc.length - 1] + el);
    }
    return acc;
  }, []);
}
