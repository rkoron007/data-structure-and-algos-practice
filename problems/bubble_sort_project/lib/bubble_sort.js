function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
}

function bubbleSort(array) {
  let didSwap = true;

  while (didSwap) {
    didSwap = false;

    for (let i = 0; i < array.length; i++) {
      if (i + 1 >= array.length) break;
      let currentEl = array[i];
      let comparisonEl = array[i + 1];
      if (currentEl > comparisonEl) {
        swap(array, i, i + 1);
        didSwap = true;
      }
    }
  }

  return array;
}

module.exports = {
  bubbleSort,
  swap
};
