//

const checkPerms = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let counter = hashCounter(str1);

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (counter[letter]) {
      counter[letter] -= 1;
    } else {
      return false;
    }
  }
  let values = Object.values(counter);
  let aboveZeroValues = values.filter(num => num > 0);

  return aboveZeroValues.length === 0;
};

const hashCounter = str => {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (hash[letter]) {
      hash[letter] += 1;
    } else {
      hash[letter] = 1;
    }
  }
  return hash;
};

console.log(checkPerms("abcd", "dcbae"));
