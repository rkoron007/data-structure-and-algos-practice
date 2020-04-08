// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx = 1) {
  // determine that all parent nodes are larger than their children
  if (idx === array.length - 1) return true;
  let leftChildIdx = idx * 2;
  let rightChildIdx = idx * 2 + 1;
  let left = array[leftChildIdx] ? array[leftChildIdx] : -Infinity;
  let right = array[rightChildIdx] ? array[rightChildIdx] : -Infinity;
  let current = array[idx];
  if (left === -Infinity && right === -Infinity) return true;

  if (current > right && current > left) {
    return isMaxHeap(array, idx + 1);
  }

  return false;
}

module.exports = {
  isMaxHeap,
};
