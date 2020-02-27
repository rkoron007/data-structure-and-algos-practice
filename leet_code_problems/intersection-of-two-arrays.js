// Given two arrays, write a function to compute their intersection.

// constraints:
    // if an element is repeated in both arrays the it is in the final array

// naive approach
// 1. iterate over the first array and store each element into a key and the
// number of times that element occurs as the value

// 2. Iterate through the second array and if an element is in the hash then
// push that element into a results and then decrement the value in the hash

// nums1 = [4,9,5], nums2 = [9,4,9,8,4]
const intersect = (arr1, arr2) => { // O (m * n) space O(n)
    const comparePojo = {};
    let results = [];

    arr1.forEach((num) => {
        if (comparePojo[num]) {
            comparePojo[num] += 1;
        } else {
            comparePojo[num] = 1; // { 4: 1, 9: 1, 5: 1}
        }
    })

    arr2.forEach((num) => {
        if (comparePojo[num] && comparePojo[num] > 0) {
          results.push(num); // [9, 4]
          comparePojo[num] -= 1; // {4: 0, 9: 0, 5: 1}
        }
    })

    return results;
}

let nums1 = [4, 9, 5]
let nums2 = [9, 4, 9, 8, 4];

// if already sorted 

console.log(intersect(nums1, nums2));