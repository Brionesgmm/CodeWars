// answer
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce < 0 || bounce >= 1 || window >= h) {
    return -1;
  } else {
    let count = 0;
    let bounceDist = h * bounce;
    for (
      let i = bounceDist;
      bounceDist > window;
      bounceDist = bounceDist * bounce
    ) {
      count = count + 2;
    }
    count++;
    return count;
  }
}
