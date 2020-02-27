function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentEl = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentEl; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentEl;
  }

  return arr;
}

console.log(insertionSort([4, 2, 1, 7]));

module.exports = {
  insertionSort
};
