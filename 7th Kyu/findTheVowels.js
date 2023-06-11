// answer
function vowelIndices(word) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const indices = [];

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (vowels.includes(char)) {
      indices.push(i + 1);
    }
  }

  return indices;
}
