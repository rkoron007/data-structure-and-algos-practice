function longestCommonPrefix(array) {
  let longestPrefix = "";
  if (!array.length) return longestPrefix;
  let firstWord = array[0];
  let lastWordIdx = array.length - 1;
  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 1; j < array.length; j++) {
      let word = array[j];
      if (word[i] !== firstWord[i]) {
        return longestPrefix;
      } else if (j === lastWordIdx) {
        longestPrefix += word[i];
      }
    }
  }

  return longestPrefix;
}

console.log(longestCommonPrefix(["a"]));
