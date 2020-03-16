


// const isLongPressedName = function(name, typed) {
//   let charMap = createCounter(name);

//   // we need to iterate through the name map we created
//   // decrementing for each letter count
//   for (let i = 0; i < typed.length; i++) {
//     let letter = typed[i];
//     if (charMap[letter]) {
//       charMap[letter] -= 1;
//     } else if (charMap[letter] === undefined) {
//       return false;
//     }
//   }


//   // if at the end any letters are still positive in charmap
//   // (therefore not in typed) then we return false;
//   let remainingLetters = Object.values(charMap)
//   for (let i = 0; i < remainingLetters.length; i++) {
//     if (remainingLetters[i] > 0) {
//       return false;
//     }
//   }
  
//   return true;
// };


// const createCounter = (str) => {
//   let counter = {};
//   let arr = str.split("");
//   arr.forEach(el => {
//     if (counter[el]) {
//       counter[el] += 1;
//     } else {
//       counter[el] = 1;
//     }
//   });
//   return counter;
// }


// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
//   Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
// Example 3:

// Input: name = "leelee", typed = "lleeelee"
// Output: true
// Example 4:

// Input: name = "laiden", typed = "laiden"
// Output: true
// Explanation: It's not necessary to long press any character.



const isLongPressedName = (name, typed) => {
  const nameIndex = 0;
  let nameLetter = name[nameIndex];
  
  for (let typedIndex = 0; typedIndex < typed.length; typedIndex++) {
    if (nameLetter === undefined) return false;
    let typedLetter = typed[typedIndex];
    if (nameLetter === typedLetter) {
      continue;
    } else if (nameLetter !== typedLetter) {
      nameIndex += 1;
      if (nameLetter !== typedLetter) return false;
    }   
  }

  return true;
}


// "kikcxmvzi"
// "kiikcxxmmvvzz"

console.log(isLongPressedName("kikcxmvzi", "kiikcxxmmvvzz"))
// console.log(isLongPressedName("saeed", "ssaaedd"))
// console.log(isLongPressedName("leelee", "lleeelee"))
// console.log(isLongPressedName("laiden", "laiden"))