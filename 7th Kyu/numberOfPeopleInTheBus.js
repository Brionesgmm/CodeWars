// answer
var number = function (busStops) {
  return busStops.reduce((acc, c) => {
    return acc + c[0] - c[1];
  }, 0);
};
