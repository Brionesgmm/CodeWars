// answer
function dataReverse(data) {
  let chunks = [];
  for (let i = 0; i < data.length; i += 8) {
    chunks.push(data.slice(i, i + 8));
  }
  console.log(chunks);
  return chunks.reverse().flat();
}
