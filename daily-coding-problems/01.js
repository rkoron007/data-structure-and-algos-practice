// Given a list of numbers and a number k, return whether any two numbers from
// the list add up to k.

// For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass ?

const twoSum = (nums, target) => {
  let counter = {};

  nums.forEach(num => {
    let diff = target - num;
    counter[diff] = true;
  });

  for (let i = 0; i < nums.length; i++) {
    if (counter[i]) return true;
  }

  return false;
};

console.log(twoSum([10, 15, 3, 7], 17));
