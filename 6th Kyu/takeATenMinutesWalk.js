// answer
function isValidWalk(walk) {
  const north = walk.filter((el) => el === "n");
  const south = walk.filter((el) => el === "s");
  const west = walk.filter((el) => el === "w");
  const east = walk.filter((el) => el === "e");

  if (walk.length === 10) {
    if (north.length === south.length) {
      if (west.length === east.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
