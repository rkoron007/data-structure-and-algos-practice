// if an el is et to zero entire row and col set to zero
// [[3, 4, 5]   (1,2)     [[3, 4, 0]
//  [2, 7, 0]] ->         [0, 0, 0]]

// if I encounter a zero every el in that array is not 0 (all the rows are zero)
// now think about the column
// now need to iterate through the column and turn all

const zeroMatrix = (matrix) => {
  let listZeros = findZeroes(matrix);
  return replaceZeros(matrix, listZeros);
};

const findZeroes = (matrix) => {
  let zeroes = {};
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    const row = matrix[rowIdx];

    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      if (row[colIdx] === 0) {
        if (zeroes[rowIdx]) {
          zeroes[rowIdx].push(colIdx);
        } else {
          zeroes[rowIdx] = [colIdx];
        }
      }
    }
  }
  return zeroes;
};

// { '0': [ 0 ], '1': [ 2 ] }
const replaceZeros = (zeroCount, matrix) => {
  if (!Object.keys(zeroCount)) return matrix;
  for (let rowIdx in zeroCount) {
    matrix[rowIdx] = matrix[rowIdx].map((el) => (el = 0));

    zeroCount[rowIdx].forEach((colIdx) => {
      replaceZeroCol(matrix, colIdx);
    });
  }
  return matrix;
};

const replaceZeroRow = (row) => {
  return row.map((el) => (el = 0));
};

const replaceZeroCol = (matrix, colIdx) => {
  matrix.map((row) => {
    row[colIdx] = 0;
  });

  return matrix;
};

console.log(
  replaceZeros({ "1": [2] }, [
    [1, 4, 5],
    [2, 7, 0],
  ])
);
