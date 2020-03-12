module.exports = function reverse (n) {
  return Number(Math.abs(n).toString(10).split('').reverse().join(''));
}
