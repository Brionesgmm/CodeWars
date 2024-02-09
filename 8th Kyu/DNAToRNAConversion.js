// answer
function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((el) => {
      if (el === "T") {
        return "U";
      } else {
        return el;
      }
    })
    .join("");
}
