// Agenda
// -interview tips
// -warm up with fib
// -time and space complexity analysis
// -rando problem together
​
// Write a function named fib(n), returns the nth number of the fib sequence
//
// fib(1) // 1
// fib(2) // 1
// fib(3) // 2
// fib(4) // 3
// fib(5) // 5
​
// const fib = (n) => {
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// };
​
// console.log(fib(4)); // 3
// console.log(fib(5)); // 5
// console.log(fib(10)); // 55
// console.log(fib(40)); // ???
​
​
​
// for (let i = 1; i <= n; i += 99999999) {
//   console.log(i);
// }
​
​
​
// fib(4);
// Time complexity of fib: O(2^n)
​
// Size of this tree: height n
// overall: 2 * 2 * 2 (n times over)
//              2^n - exponential
​
// Memoization
//      - type of dynamic programming
//      - to avoid duplicate computation, we cache args of the function to return 
​
// const fib = (n, memo = {}) => {
//   // if n is already in the memo, then return the stored value associated with n in the memo
//   if (n in memo) {
//     return memo[n];
//   }
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   // if n is not in the memo
//   //    calculate the actual answer manually, but cache that answer into the memo
//   const sum = fib(n - 1, memo) + fib(n - 2, memo);
//   memo[n] = sum;
//   return sum;
// };
​
// function fib(n) {
//   const memo = {};
//   const _fib = (n) => {
//     // if n is already in the memo, then return the stored value associated with n in the memo
//     if (n in memo) {
//       return memo[n];
//     }
//     if (n === 1 || n === 2) {
//       return 1;
//     }
//     // if n is not in the memo
//     //    calculate the actual answer manually, but cache that answer into the memo
//     const sum = _fib(n - 1, memo) + _fib(n - 2, memo);
//     memo[n] = sum;
//     return sum;
//   };
//   return _fib(n)
// };
​
​
​
​
// console.log(fib(60))
​
//                                           f(6)
//                       /                                 \
//                     f(5)                               f(4)   
//             /                 \
//           f(4)                f(3) 
//         /     \             
//       f(3)   f(2)         
//     /   \         
// f(2)    f(1)  
​
​
// large/slow
//      O(n!)     - factorial
//      O(c^n)    - exponential
//          O(2^n) 
//      O(n^c)    - polynomial
//        O(n^3)      - cubic
//        O(n^2)      - quad
//      O(n logn) - loglinear, linearithmic, quasilinear 
//      O(n)      - linear
//      O(logn)   - logarithmic
//      O(1)      - constant
// small/fast
​
​
​
   
// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
​
// foo(999); // O(?)
​
​
​
​
​
​
// Big-O, worst case
// Time Complexity:
//    - consider loops, iterations?
//    
// Space Complexity:
//    - consider callstack for recursion?
​
​
​
​
​
​
​
​
​
// Bottom Up
// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(6));
​
// Top Down: weirdness antipattern
// let product = 1
// function factorialTwo(n) {
//   if (n === 1) return product;
//   product *= n
//   return factorialTwo(n - 1);
// }
// factorialTwo(6);
// console.log(product);
​
​
​
​
​
​
​
// Lexical Scoping:
//    way to know the value of a variable upon compilation
//    ;it does not change during runtime
​
​
// var
//    - fn scope
//    - declaration is hoisted
//    - can be redeclared
//    - can be reassigned
// let
//    - block scope
//    - not hoisted
//    - cannot be redeclared
//    - can be reassigned
// const
//    - block scope
//    - not hoisted
//    - cannot be redeclared
//    - cannot be reassigned
​
​
// console.log(potato);
// let potato = 'a carb';
​
​
var potato = 'sweet';
if (true) {
  var potato = 'a carb';
  console.log('1', potato);
}
console.log('2', potato);