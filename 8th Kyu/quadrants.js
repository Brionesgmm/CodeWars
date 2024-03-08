// answer
function quadrant(x, y) {
  if (x >= 1) {
    if (y >= 1) {
      return 1;
    } else if (y <= 1) {
      return 4;
    }
  } else {
    if (x <= 1) {
      if (y >= 1) {
        return 2;
      } else if (y <= 1) {
        return 3;
      }
    }
  }
}
