//Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

//Note: For the purpose of this problem, we define empty string as valid palindrome.

//Input: "A man, a plan, a canal: Panama"
//Input: "A man, a plan, a canal: Panama"
// Output: true

// cattac

function isPalindrome (str) {
  let re = /[\W_]/g;
  str = str.toLowerCase().replace(re, '');

  let reverse = str.split('').reverse().join('');
  return str === reverse;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))