// Given an integer n and an array a of length n, your task is to apply the following mutation to a:

// Array a mutates into a new array b of length n.
// For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
// If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, 
// it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1].


// For n = 5 and a = [4, 0, 1, -2, 3],
//  the output should be mutateTheArray(n, a) = [4, 5, -1, 2, 1].

const mutateTheArray = (n, a) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    let firstNum = a[i - 1] ? a[i - 1] : 0; // 4
    let secondNum = a[i + 1] ? a[i + 1] : 0;


    result.push(firstNum + a[i] + secondNum);
  }

  return result;
}

console.log(mutateTheArray(5, [4, 0, 1, -2, 3]));
