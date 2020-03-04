// Given a string, find the first non-repeating character in it and return it's 
// index. If it doesn't exist, return -1.

// 1. create a hashmap (object) with each letter as a key and the occurrences as the 
// value

// 2. iterate through the word in order checking each key inside my hashmap
// until I find the first value that is < 2
// 

const counterObject = (str) => {
    let counter = {};  
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (counter[char]) {
        counter[char] += 1;
        } else {
        counter[char] = 1;
        }
    }
    return counter;
}

const uniqueIndex = (str) => {  
    let counter = counterObject(str);

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (counter[char] < 2) {
            return i;
        }
    }

    return -1;
}

console.log(uniqueIndex("leetcode"));