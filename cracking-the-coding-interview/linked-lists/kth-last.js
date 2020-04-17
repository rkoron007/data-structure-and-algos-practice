const { LinkedList, Node } = require("./remove-duplicates");

LinkedList.prototype.kToLastFirst = function (k) {
  let currentNode = this.head;
  let arr = [];

  while (currentNode) {
    arr.push(currentNode);
    currentNode = currentNode.next;
  }

  return arr[arr.length - k];
};

LinkedList.prototype.kToLastSecond = function (k) {
  this.reverse();
  let counter = 0;
  let current = this.head;

  while (counter < k) {
    current = current.next;
    counter++;
  }

  return current;
};

LinkedList.prototype.kToLastThird = function (k) {
  let runner = this.head;
  let slower = this.head;
  let counter = 0;

  while (counter < k) {
    if (!runner.next) return null;
    runner = runner.next;
    counter++;
  }

  while (runner.next) {
    slower = slower.next;
    runner = runner.next;
  }

  return slower;
};

LinkedList.prototype.reverse = function () {
  let first = this.head;
  let node = first;
  let next = null;
  let prev = null;

  while ((next = node.next)) {
    node.next = prev;
    prev = node;
    node = next;
  }

  node.next = prev;
  this.head = node;
  this.tail = first;
};

let l = new LinkedList();
l.insert("a");
l.insert("c");
l.insert("b");
l.insert("d");
l.insert("e");

console.log(l.kToLastThird(2));
