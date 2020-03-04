// Given an array nums, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// You must do this in-place without making a copy of the array

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// iterate through the incoming array
    // can I alter the incoming array?
    // if I encounter a zero and this is not the end of the array I'll increment a count of zeros 
    // splice the array to remove that element
  // at the end I'll push on the number of zeros my counter encountered  

const moveZeros = (nums) => { 
    let notaZero = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) { 
            nums[notaZero] = nums[i] 
            notaZero++;
        }
    }

    for (let j = notaZero; j < nums.length; j++) {
        nums[j] = 0;
    }

    return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));