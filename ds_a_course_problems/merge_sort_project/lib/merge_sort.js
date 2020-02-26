// we will have two sorted arrays as args
// create a third array that will contain the elements of the first two arrays
// while both arrays are *not* empty
// choose the first element from array1 and array2
// compare those two elements
// whichever is smaller is shifted into the new array

// [2,7], [3, 4]
function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let arrayOneFirstEl = array1.length ? array1[0] : Infinity;
    let arrayTwoFirstEl = array2.length ? array2[0] : Infinity;

    let el;
    if (arrayOneFirstEl < arrayTwoFirstEl) {
      el = array1.shift();
    } else {
      el = array2.shift();
    }
    merged.push(el);
  }

  merged.push(...array1, ...array2);
  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let middleIndex = Math.floor(array.length / 2); // [1, 7, 4, 6]
  let leftSide = mergeSort(array.slice(0, middleIndex));
  let rightSide = mergeSort(array.slice(middleIndex));

  return merge(leftSide, rightSide);
}

console.log(mergeSort([5, 7, 4, 6]));

module.exports = {
  merge,
  mergeSort
};
