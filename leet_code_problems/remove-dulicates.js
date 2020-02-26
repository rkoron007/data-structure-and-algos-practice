const removeDuplicates = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // here I need to check if the current num === last num
    // if it is no increase
    let currentNum = nums[i];
    let lastNum = nums[i - 1];
    if (i === 0) {
      count += 1; // count = 1
    } else if (currentNum !== lastNum) {
      count += 1;
    }
  }

  return count;
};

var singleNumber = function(nums) {
  let count = {};

  nums.forEach(num => {
    if (count[num]) {
      count[num] += 1;
    }
    count[num] = 1;
  });

  for (let key in count) {
    if (count[key] < 2) {
      return key;
    }
  }
};
