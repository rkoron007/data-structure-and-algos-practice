// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
// find the one that is missing from the array.

// Input: [3,0,1]
// Output: 2

// find the min number
// find the max
// create a hash of all the incoming numbers keeping track of min and max

// then iterate from min to max until you find a key that doesn't exist in the object
const missingNumber = function(nums) {
  if (nums.length === 0) return [];
  let max = -Infinity;

  let counter = {};
  nums.forEach(el => {
    if (el > max) max = el; // 1
    counter[el] = true;
  });

  let missing = max === 0 ? 1 : undefined; // un
  for (let i = 0; i <= max + 1; i++) {
    if (!counter[i]) {
      return i;
    }
  }

  return missing;
};

module.exports = missingNumber;
