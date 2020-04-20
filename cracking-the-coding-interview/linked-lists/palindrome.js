// implement a check to see if a linked list is a palindrome

const { LinkedList } = require("./remove-duplicates");

LinkedList.prototype.isPalindrome = function () {
  let counter = this.countList();
  let countValues = Object.values(counter);
  let oddCount = 0;

  for (let i = 0; i < countValues.length; i++) {
    if (oddCount > 1) return false;
    let value = countValues[i];
    if (value % 2 !== 0) {
      oddCount += 1;
    }
  }
  return true;
};

LinkedList.prototype.countList = function () {
  let counter = {};
  if (!this.size()) return counter;

  let cNode = this.head;

  while (cNode) {
    if (counter[cNode.value]) {
      counter[cNode.value] += 1;
    } else {
      counter[cNode.value] = 1;
    }
    cNode = cNode.next;
  }

  return counter;
};

LinkedList.prototype.isPalindromeStack = function () {
  let stack = [];

  let cNode = this.head;

  while (cNode) {
    stack.push(cNode.value);
    cNode = cNode.next;
  }

  cNode = this.head;
  while (stack.length) {
    let lastEl = stack.pop();
    if (lastEl !== cNode.value) return false;
    cNode = cNode.next;
  }

  return true;
};

let l1 = new LinkedList();

l1.insert("r");
l1.insert("a");
l1.insert("c");
l1.insert("e");
l1.insert("c");
l1.insert("a");
l1.insert("r");

let l2 = new LinkedList();

l2.insert("r");
l2.insert("a");
l2.insert("c");
l2.insert("e");
l2.insert("c");
l2.insert("a");
l2.insert("d");

console.log(l1.isPalindromeStack());
console.log(l2.isPalindromeStack());
