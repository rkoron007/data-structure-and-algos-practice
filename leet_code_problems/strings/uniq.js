// all unique chars

// const hashCounter = (str) => {
//   let counter = {};

//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     if (counter[letter]) {
//       counter[letter] += 1;
//     } else {
//       counter[letter] = 1;
//     }
//   }

//   return counter;
// }

// const myUniq = (str) => {
//   let counter = hashCounter(str);
//   let counterValues = Object.values(counter);

//   for (let i = 0; i < counterValues.length; i++) {
//     if (counterValues[i] > 1) return false;
//   }

//   return true;
// }


const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr.shift();

  let left = arr.filter((el) => el < pivot);
  let right = arr.filter((el) => el >= pivot);

  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return sortedLeft.concat([pivot]).concat(sortedRight)
}


const myUniq2 = (str) => {
  // n log n for the sort
  let sorted = quickSort(str.split(""));

  // o (n)
  for (let i = 0; i < sorted.length; i++) {
    if (!sorted[i+1]) break;
    if (sorted[i] === sorted[i+1]) {
      return false;
    }
  }
  return true;
} 


// console.log(quickSort(["a", "b", "a"]))

// console.log(myUniq("aple"));
