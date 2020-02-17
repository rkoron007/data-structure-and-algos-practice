/**
//  * @param {number[][]} grid
//  * @return {number}
 */

// [[1,1]
//  [2,2] ] // [Infinity, Infinity Infinity, Infinify, Infinity]
// matric can only move down or right at any time
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  if (grid.length === 0) return 0;

  let table = new Array(m).fill().map(() => new Array(n).fill(Infinity)); // []

  table[0][0] = grid[0][0]; //  [1, Infinity, Infinity, Infinify, Infinity]

  for (let i = 0; i < m; i++) {
    // now I need to decide right or down?
    // then pick the largest between the two?

    for (let j = 0; j < n; j++) {
      // choosing our right neighbor

      if (j < n - 1) {
        table[i][j + 1] = Math.min(
          table[i][j] + grid[i][j + 1],
          table[i][j + 1]
        );
      }

      // should we do our current path or choose our bottom neighbor
      if (i < m - 1) {
        table[i + 1][j] = Math.min(
          table[i][j] + grid[i + 1][j],
          table[i + 1][j]
        );
      }

      // should we do our current path or choose our right neighbor
    }
  }

  return table;
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
);
