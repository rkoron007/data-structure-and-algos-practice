// Input: ["flower","flow","flight"]
// Output: "fl"
const longestCommonPrefix = array => {
  if (array.length === 0) return "";
  if (array.length === 1) return array[0];
  let prefixes = createHash(array[0]);

  for (let i = 1; i < array.length; i++) {
    let word = array[i];
    for (let j = 0; j < word.length; j++) {
      let prefix = word.slice(0, j);
      if (!prefixes[prefix]) {
        return word.slice(0, j - 1);
      }
    }
  }

  let commonPfix = Object.keys(prefixes);
  let longestPreFix = commonPfix.sort((a, b) => b.length < a)[0];
  return longestPreFix;
};

const createHash = word => {
  let letters = word.split("");
  let prefixHash = { "": true };
  for (let i = 0; i < letters.length; i++) {
    let prefix = letters.slice(0, i + 1).join("");
    prefixHash[prefix] = true;
  }

  return prefixHash;
};

console.log(longestCommonPrefix(["", ""]));
