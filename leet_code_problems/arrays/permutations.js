const permutations = (arr) => {
  if (arr.length <= 1) return [arr];

  let currentEl = arr.pop();
  let lastStep = permutations(arr);
  let currentStep = [];
  
  for (let i = 0; i < lastStep.length; i++) {
    let currArray = lastStep[i]; 
    for (let j = 0; j <= currArray.length; j++) { 
      let left = currArray.slice(0, j);
      let right = currArray.slice(j, currArray.length); 
      currentStep.push(left.concat([currentEl]).concat(right));
    }
  }
  return currentStep;
}

console.log(permutations([1, 2, 3]))

// module.exports = permutations;