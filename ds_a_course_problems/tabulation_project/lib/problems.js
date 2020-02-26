// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take
// from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3.
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
// 3 -- 1, 2, 3 = true
// stepper([3, 1, 0, 3]);
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

function tabstepper(nums) {
  let table = new Array(nums.length).fill(false); // [3, 1, 0, 5, 10]) => [false, false, false, false, false, false]
  table[0] = true; // [true, false, false, false ,false, false]

  for (let index = 0; index < nums.length; index++) {
    // i = 1
    let currentNum = nums[index]; // 1
    if (table[index] === true) {
      // table[1] = true [true, true, true, true, false, false]
      for (let j = index + 1; j <= currentNum; j++) {
        // j = 3, 5 < 5
        table[i + j] = true;
      }
    }
  }

  // iterate through the numbers
  return table[table.length - 1];
}

// [3, 1, 0, 5, 10]
function stepper(nums, memo = {}) {
  // recursive
  // make array slices to call stepper on
  let key = nums.length;
  if (key in memo) return memo[key];
  if (nums.length === 0) return true;

  let maxRange = nums[0];
  // make three rescursive calls to the first three numbers
  for (let index = 1; index <= maxRange; index++) {
    if (stepper(nums.slice(index), memo)) {
      memo[key] = true;
      return true;
    }
  }

  memo[key] = false;
  return false;
}

// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6

// iterate through nums and add up adjacent nums
// start at first num and add up each adjacent num
// inner loop will start at second num and add each adjacent num from there and add to table
// then Math.max with largest num

// [4, 2, 1, 6]
function tabmaxNonAdjacentSum(nums) {
  if (nums.length === 0) return 0;
  let table = new Array(nums.length).fill(0);
  table[0] = nums[0];

  for (let i = 1; i < table.length; i++) {
    let skipleft = table[i - 2] === undefined ? 0 : table[i - 2];
    let includeNum = skipleft + nums[i];
    let notIncludeNeighbor = table[i - 1];
    table[i] = Math.max(includeNum, notIncludeNeighbor);
  }

  return table;
}

function maxNonAdjacentSum(nums, memo = {}) {
  let key = nums.length;
  if (key in memo) return memo[key];
  if (nums.length === 0) return 0;

  let firstEl = nums[0];

  memo[key] = Math.max(
    firstEl + maxNonAdjacentSum(nums.slice(2), memo),
    maxNonAdjacentSum(nums.slice(1), memo)
  );

  return memo[key];
}

// console.log(maxNonAdjacentSum([2, 7, 9, 3, 4]));
// console.log(maxNonAdjacentSum([4, 2, 1, 6]));
//  maxNonAdjacentSum([1, 2, 3, 1])
//  maxNonAdjacentSum([4, 1, 1, 10, 3, 2])

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function memoMinChange(coins, amount, memo = {}) {
  if (memo[amount]) return memo[amount];
  if (amount <= 0) return 0;
  let purses = [];
  // iterate through each coin
  coins.forEach(coin => {
    if (coin <= amount) {
      // 11  - 1
      let newAmount = amount - coin; // 10
      purses.push(minChange(coins, newAmount, memo) + 1);
    }
  });
  memo[amount] = Math.min(...purses);
  return memo[amount];
}

const minChange = (coins, amount) => {
  let table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  coins.forEach(coin => {
    for (let amt = 0; amt < table.length; amt++) {
      for (let qty = 0; qty * coin < amt; qty++) {
        let remainder = amt - qty * coin;
        let attempt = table[remainder] + qty;

        if (attempt < table[amt]) {
          table[amt] = attempt;
        }
      }
    }
  });

  return table[table.length - 1];
};

module.exports = {
  stepper,
  maxNonAdjacentSum,
  minChange
};
