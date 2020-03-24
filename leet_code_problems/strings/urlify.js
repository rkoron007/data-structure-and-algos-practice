// replace every empty space with %20 IF another
// letter will still be in the string

// Mr John     S
// Mr%20John%20S

// "mrs"
// "mrs"

// iterate through until encounter a space
// then wait till I encounter another character insert %20 and that next character

const urlify = string => {
  let output = "";
  let wasEmpty = false;

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter === " ") {
      wasEmpty = true;
      continue;
    } else {
      if (wasEmpty) {
        output += "%20"; // mr
        wasEmpty = false;
      }
      output += letter;
    }
  }
  return output;
};

module.exports = urlify;
