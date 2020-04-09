function swap(array, originalIdx, swapIdx) {
  return ([array[originalIdx], array[swapIdx]] = [
    array[swapIdx],
    array[originalIdx],
  ]);
}

function heapify(array, heapSize, idx) {
  let leftIdx = idx * 2 + 1;
  let rightIdx = idx * 2 + 2;
  let val = array[idx];

  let left = array[leftIdx];
  let right = array[rightIdx];

  if (leftIdx >= heapSize) left = -Infinity;
  if (rightIdx >= heapSize) right = -Infinity;

  if (val > left && val > right) return;

  let swapIdx;
  if (left > right) {
    swapIdx = leftIdx;
  } else {
    swapIdx = rightIdx;
  }

  swap(array, idx, swapIdx);
  heapify(array, heapSize, swapIdx);
}

function heapSort(array) {
  // translate into heap
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }

  // keep deleting until heap is empty
  for (let heapIdx = array.length - 1; heapIdx >= 0; heapIdx--) {
    swap(array, 0, heapIdx);
    heapify(array, heapIdx, 0);
  }

  return array;
}

let ary = [3, 42, 50];

console.log(heapSort(ary));
