// Given a 32-bit signed integer, reverse digits of an integer.
// Input: 123
// Output: 321


function reverse (int) {

  let str = Math.abs(int).toString();

  let revArr = str.split("").reverse()
  if (revArr[revArr.length -1] === 0) {
    revArr.slice(0, revArr.length - 1)
  }
  let revStr = revArr.join("");

  let revInt = parseInt(revStr) >= 2147483647 ? 0 : parseInt(revStr);
  if (int < 0) { revInt *= -1 }
  return revInt;
}

console.log(reverse(1534236469));