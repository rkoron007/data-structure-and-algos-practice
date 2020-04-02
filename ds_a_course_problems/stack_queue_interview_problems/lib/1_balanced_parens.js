// ============================================================================
// Interview Problem: Balanced Parentheses
// ============================================================================
//
// -------
// Prompt:
// -------
//
// You are building a linter for your company's new custom text editor to keep
// the code smells out of your (anticipated) massive codebase! Part of your
// technical design includes writing a function that checks that all of the
// parentheses in your engineers' code are balanced.
//
// Given a string of text, write a function that returns true if the
// parentheses are balanced, and false if they are not.
//
// Note: Your code should ignore all non-bracket characters in the input
//       string.
//
// ------
// Bonus:
// ------
//
// Though you may want to start by writing a function that simply handles
// parentheses as an MVP, to build a truly impactful product you must handle
// ALL bracket types, including:
//
//         - Parentheses:     ()
//         - Square Brackets: []
//         - Curly Brackets:  {}
//
// Update your original balancedParens function to handle all bracket types.
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must run in linear time, O(n).
// (2) Your function must consume (at maximum) linear space, O(n).
//
// ---------------------------
// Example 1: Parentheses Only
// ---------------------------
//
// balancedParens('(');          => false
// balancedParens('()');         => true
// balancedParens(')(');         => false
// balancedParens(')()())');     => false
// balancedParens('((()()))');   => true
//
// -----------------------------
// Example 2: Parentheses + Text
// -----------------------------
//
// balancedParens('var x = Math.floor(2.5)');             => true
// balancedParens('var y = (((x + 5)/6) + 2*(x + 10))');  => true
// balancedParens('var z = ()(x + 5)/6) + 2*(x + 10))');  => false
//
// -----------------------
// Example 3: All Brackets
// -----------------------
//
// balancedParens('()[]{}');     => true
// balancedParens('[{()}]');     => true
// balancedParens('[{])({)[}');  => false
//
// ------------------------------
// Example 4: All Brackets + Text
// ------------------------------
//
// balancedParens('const roundDown = function(num) { return Math.floor(num) };');      => true
// balancedParens('{ array: [1, 2, [3, 4], 5], timesTwoMethod: (num) => num * 2; }');  => true
// balancedParens('function printThirdElement(array) { console.log(array[3]]] }');     => false
//
// -----------
// Let's code!
// -----------

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.bottom = null;
    this.top = null;
    this.length = 0;
  }

  push(value) {
    let node;
    if (!this.top) {
      node = new Node(value);
      this.top = node;
      this.bottom = node;
    } else {
      let oldTop = this.top;
      node = new Node(value, oldTop);

      this.top = node;
    }

    this.length += 1;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;
    let oldTop = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      let newTop = oldTop.next;
      this.top = newTop;
    }

    this.length -= 1;
    if (this.length === 1) this.bottom = this.top;
    return oldTop.value;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.size() === 0;
  }

  peek() {
    return this.top.value;
  }
}

function balancedParens(str) {
  let stack = new Stack();
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  // ()()
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (pairs[char]) {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(balancedParens("({)}"));
exports.balancedParens = balancedParens;
