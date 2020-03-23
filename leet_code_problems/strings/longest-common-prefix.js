// Input: ["flower","flow","flight"]
// Output: "fl"
// const longestCommonPrefix = array => {
//   if (array.length === 0) return "";
//   if (array.length === 1) return array[0];
//   let prefixes = createHash(array[0]);

//   for (let i = 1; i < array.length; i++) {
//     let word = array[i];
//     for (let j = 0; j <= word.length; j++) {
//       let prefix = word.slice(0, j);
//       console.log(prefix);
//       if (!prefixes[prefix]) {
//         return word.slice(0, j - 1);
//       }
//     }
//   }

//   let commonPfix = Object.keys(prefixes);
//   let longestPreFix = commonPfix.sort((a, b) => a.length - b.length)[
//     commonPfix.length - 1
//   ];
//   return longestPreFix;
// };

// const createHash = word => {
//   let letters = word.split("");
//   let prefixHash = { "": true };
//   for (let i = 0; i < letters.length; i++) {
//     let prefix = letters.slice(0, i + 1).join("");
//     prefixHash[prefix] = true;
//   }

//   return prefixHash;
// };

const longestCommonPrefix = array => {
  if (array.length === 0) return "";
  let prefix = array[0];
  for (let i = 1; i < array.length; i++) {
    while (array[i].indexOf(prefix) !== 0) {
      console.log(prefix);
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(prefix);
      if (prefix === 0) return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
