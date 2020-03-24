const permaPalindrome = (string) => {
  let count = counterHash(string);
  let singleLetter = 0;
  let countValues = Object.values(count);

  for (let i = 0; i < countValues.length; i++) { // e
    // meaning we have two odd count which makes this not a palindrome
    const num = countValues[i];
    if (num % 2 === 0) {
      continue;
    } else {
      singleLetter += 1;
    }
  }
  if (singleLetter > 1) return false;

  return true;
}

const counterHash = (str) => {
  let counter = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (letter === " ") continue;
    if (counter[letter]) {
      counter[letter] += 1;
    } else {
      counter[letter] = 1;
    }
  }
  return counter;
}


module.exports = permaPalindrome;