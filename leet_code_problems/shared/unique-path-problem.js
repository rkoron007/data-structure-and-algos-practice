//  STEPS FOR MEMOIZATION
//    1 SOLVE THE BRUTE FORCE RECURSIVELY
//    2 ADD A MEMO OBJECT TO THE ARGS, THAT WILL CONTAIN THE OTHER ARGS AS KEYS AND RETURN VALS AS VALUES
//    3 ADD AN ADDITIONAL BASE CASE TO CHECK IF THE KEY IS ALREADY IN THE MEMO,
//        - IF IT IS, THEN SIMPLY RETURN THE STORED VALUE IN THE MEMO
//        - IF IT IS NOT, THEN DO THE NORMAL RECURSION
//    4 TAKE THE ORIGINAL RETURNS VALUE AND STORE IT INTO THE MEMO USING THE KEY

// Input:
const grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]
// Output: 2
// O(n * m) - space and time!
const uniquePathsWithObstacles = (obstacleGrid, row = 0, col = 0, memo = {}) => {
  let key = [row, col].toString();
  if (key in memo) return memo[key];
  if (row > obstacleGrid.length - 1) return 0;
  if (col > obstacleGrid[0].length - 1) return 0;
  if (obstacleGrid[row][col] === 1) return 0;
  if (row === obstacleGrid.length - 1 && col === obstacleGrid[0].length - 1) {
    return 1;
  }
  let rightAndDown = uniquePathsWithObstacles(obstacleGrid, row + 1, col, memo) + uniquePathsWithObstacles(obstacleGrid, row, col + 1, memo);
  memo[key] = rightAndDown;
  return rightAndDown;
};
