

// Input: heights = [5, 1, 2, 3, 4]
// Output: 5

// Input: heights = [1, 2, 3, 4, 5]
// Output: 0


const quickSort = (arr) => {
  arr = arr.slice();
  if (arr.length <= 1 ) return arr;
  let pivot = arr.shift(); 

  let left = arr.filter((el) => el < pivot);
  let right = arr.filter((el) => el >= pivot); 

  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return sortedLeft.concat([pivot]).concat(sortedRight);
}

const heightChecker = function (heights) {
  let sorted = quickSort(heights);
  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== heights[i]) count += 1;
  }

  return count;
};

console.log(heightChecker([5, 1, 2, 3, 4]))
console.log(heightChecker([1, 2, 3, 4, 5]))


// console.log(quickSort([3,2,1]))