// Given two strings s and t , write a function to determine if 
// t is an anagram of s.

// You may assume the string contains only lowercase alphabets.

// Input: s = "anagram", t = "nagaram"
// Output: true


function isAnagram (str1, str2) {
  let letters1 = countLetters(str1);
  
  for (let i = 0; i < str2.length; i++) {
    let cLetter = str2[i];
    if (letters1[cLetter]) {
      letters1[cLetter]--;
    } else {
      return false;
    }
  }

  let values = Object.values(letters1).filter((num) => num >= 1);
  if (values.length > 0) return false;
  return true;
}


function countLetters (str) {
  let counter = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (counter[letter]) {
      counter[letter] += 1;
    } else {
      counter[letter] = 1;
    }
  }
  return counter;
}


console.log(isAnagram("anagram", "nagaram"));