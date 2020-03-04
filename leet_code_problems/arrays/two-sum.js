// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// iterate through the nums array:
    // create a object with all the numbers encountered as keys and 
    //their index as the value
// iterate through the object and see if any of the numbers add up to the target
    //- ensuring that the numbers aren't being reused by checking the index

// Given nums = [2, 7, 11, 15], target = 9,
function twoSumNaive(nums, target) { // O (n^2)

    for (let i = 0; i < nums.length; i++) { // 0
        for (let j = i + 1; j < nums.length; j++) { // 1
            if (nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
}
// make an object where the key will be the target minus each number
    // and the value will be the index for that number in the array
// then check the array to see if that number is contained in the array and is
// NOT at the index within the object

function twoSum(nums, target) { // O (n)
    let counter = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        counter[diff] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        let currentEl = nums[i];
        if (counter[currentEl] && counter[currentEl] !== i) {
            return [i, counter[currentEl]];
        }
        
    }
}

console.log(twoSum([2, 7, 11, 15], 9));