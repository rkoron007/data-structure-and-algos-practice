// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// c

function change(amount, coins, memo = {}) {
  let key = amount + "-" + coins;
  if (memo[key]) return memo[key];
  if (amount === 0) return 1;

  let currentCoin = coins[coins.length - 1]; // 5
  // 0 * 5 <= amount === true

  let total = 0;
  for (let qty = 0; qty * currentCoin <= amount; qty++) {
    total += change(amount - currentCoin * qty, coins.slice(0, -1), memo);
  }

  memo[key] = total;
  return total;
}

console.log(change(5, [1, 2, 5]));
