//You are implementing your own programming language and you've decided to add
// support for merging strings. A typical merge function would take two strings
//  s1 and s2, and return the lexicographically smallest result that can be
//  obtained by placing the symbols of s2 between the symbols of s1 in such
//  a way that maintains the relative order of the characters in each string.

//For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".


// You'd like to make your language more unique, so for your merge function,
// instead of comparing the characters in the usual lexicographical order,
// you'll compare them based on how many times they occur in their respective
// strings (fewer occurrences means the character is considered smaller).
// If the number of occurrences are equal, then the characters should be compared
// in the usual way. If both number of occurrences and characters are equal,
// you should take the characters from the first string to the result.

// Given two strings s1 and s2, return the result of the special merge function
// you are implementing.

// 1. need to know the count of each char in string
// 2. If equal take the smaller char
// 3. If chars equal then take fom string 1


function mergeStrings(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  const count1 = hashCounter(arr1);
  const count2 = hashCounter(arr2);
  let result = "";

  while (arr1.length > 0 && arr2.length > 0) {
    let letter1 = arr1[0];
    let occur1 = count1[letter1];
    let letter2 = arr2[0];
    let occur2 = count2[letter2];
    console.log(arr2.length)

    if (occur1 > occur2) {
      result += letter2
      arr2 = arr2.slice(1, arr2.length);
    } else if (occur2 > occur1) {
      result += letter1
      arr1 = arr1.slice(1, arr1.length);
    } else if (letter1 < letter2) {
      result += letter1
      arr1 = arr1.slice(1, arr1.length);
    } else if (letter2 < letter1) {
      result += letter2
      arr2 = arr2.slice(1, arr2.length);
    } else {
      result += letter1
      arr1 = arr1.slice(1, arr1.length);
    }
  }

  return result;
}

function hashCounter (arr) {
  let counter = {};

  arr.forEach((el) => {
    if (counter[el]) {
      counter[el] += 1;
    } else {
      counter[el] = 1;
    }
  })

  return counter;
}

console.log(mergeStrings("dce", "cccbd"));
