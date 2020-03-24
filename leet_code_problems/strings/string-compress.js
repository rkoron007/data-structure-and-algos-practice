// point for count pointer for 

// "aaabbcccaa" // "a3b2c3a2"

const stringCompress = (str) => {
  let countLetter = str[0]; // a
  let count = 0;
  let result = [];

  for (let i = 0; i <= str.length; i++) {
    let letter = str[i];
    if (countLetter !== letter) { 
      result.push(countLetter)
      result.push(count)
      count = 1;
      countLetter = letter;
    } else {
      count += 1; 
    } 
  }

  return result.join("");
}


console.log(stringCompress("aaabbcccaaa"))