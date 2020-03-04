const singleNumber = function(nums) {
  let count = {};

  nums.forEach(num => {
    if (count[num]) {
      count[num] = 2;
    } else {
        count[num] = 1;
    }
  });


  for (let key in count) {
    if (count[key] < 2) {
      return key;
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
