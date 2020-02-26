function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

function selectionSort(arr) {
  // [ 7, 9, 3]

  for (let index = 0; index < arr.length; index++) {
    let minIndex = index;

    for (let j = index + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }

      swap(arr, index, minIndex);
    }
  }
}

module.exports = {
  selectionSort,
  swap
};
