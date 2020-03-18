// You are given two arrays of integers a and b of the same length, and an integer k.
// We will be iterating through array a from left to right, and simultaneously through
// array b from right to left, and looking at pairs(x, y), where x is from a and y is
// from b.Such a pair is called tiny if the concatenation xy is strictly less than k.

// Your task is to return the number of tiny pairs that you'll encounter during
// the simultaneous iteration through a and b.

function countTinyPairs(a, b, k) {
  let j = b.length - 1;
  let counter = 0;

  for (let i = 0; i < a.length; i++) {
    let firstDigit = a[i];
    let secondDigit = b[j];

    let stringNum = "" + firstDigit + secondDigit;

    if (parseInt(stringNum) < k) counter++;
    j--;  
  }

  return counter;
}

let a = [1, 2, 3]
let b = [1, 2, 3]

console.log(countTinyPairs(a, b, 31))