// example:
// pale, ple => true
// pales, pale => true
// pale, bale => true
// pale, bake => false

// compare two strings and see if they are one "edit" away

const countOccurances = (str) => {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }

  return count;
}



const oneAway = (str1, str2) => {
  if (str1 === str2) return true;

  const short = str1 < str2 ? str1 : str2;
  const long = str1 > str2 ? str1 : str2;
  let shortCount = countOccurances(short);
  let offCount = 0;

  for (let i = 0; i < long.length; i++) {
    const letter = long[i];
    if (shortCount[letter] > 0) {
      shortCount[letter] -= 1;
    } else {
      offCount +=1;
    }
  }

  if (offCount > 1) return false;
  return true;
}

module.exports = oneAway;

console.log(oneAway("pale", "bale"));
// "pales", "pale" => true
// "pale", "bale" => true
// "pale", "bake" => false)

