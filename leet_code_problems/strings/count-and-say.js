// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count - and - say sequence.
// You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.

//
// the base case is a single one
// from there we read the previous result and translate into a

// 1 -> "1"
// 2 -> "11"
// 3 -> "21"
// 4 -> "1211"
// 5 -> "111221"
// 6 -> "312211"

const countAndSay = n => {
  if (n <= 0) return "";
  if (n === 1) return n.toString(2);
  let lastStep = countAndSay(n - 1); // "111221"
  let compareDigit = lastStep[0]; // 1
  let count = 1;
  let result = "";

  for (let i = 1; i < lastStep.length + 1; i++) {
    let currentDigit = lastStep[i]; // 2
    if (currentDigit === compareDigit) {
      count += 1; // 3
    } else {
      result += count; // 3
      result += compareDigit; // 1
      compareDigit = currentDigit;
      count = 1;
    }
  }

  return result;
};

module.exports = countAndSay;
