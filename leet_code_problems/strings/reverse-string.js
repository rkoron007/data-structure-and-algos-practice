//Write a function that reverses a string. T
// he input string is given as an array of characters char[].

// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.

// set up two pointers one to the end of the array and one to the front of the array
    // flip the values (make last el === first and vice versa) then move pointer in
    // once the pointer is at the middle we are done!

    // ['a','b','c','d','e']
function reverseString(letters) {
    let end = letters.length - 1; // 4
    for (let start = 0; start < letters.length; start++) {
        if (end < start) break;
        let tempLetter = letters[start]; //'a'
        letters[start] = letters[end]; // ['e','d','c','d','e']
        letters[end] = tempLetter; // ['e','b','c','d','a']
        end -= 1;
    }
    return letters;
}

console.log(reverseString(["H", "a", "n", "n", "a", "h"]));