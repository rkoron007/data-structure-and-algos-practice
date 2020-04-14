// attempt to see if s1 === a rotation of s2

function isSubstr(str1, str2) {
  // let short = str1.length < str2.length ? str1 : str2;
  // let long = str1.length > str2.length ? str1 : str2;
  // let shortIdx = 0;

  // for (let longIdx = 0; longIdx < long.length; longIdx++) {
  //   let longLetter = long[longIdx];
  //   let shortLetter = short[shortIdx];
  //   if (shortLetter === longLetter) {
  //     shortIdx++;
  //     continue;
  //   }
  // }

  // return shortIdx === short.length;
  return str1.includes(str2);
}

// console.log(isSubstr("water", "ter"));
// console.log(isSubstr("water", "aterw"));

function stringRotation(str1, str2) {
  // first determine the first common char and split?
  if (str1.length !== str2.length) return false;
  let doubleS1 = str1 + str1;
  return isSubstr(doubleS1, str2);
}

console.log(stringRotation("waterbottle", "erbottlewat"));
