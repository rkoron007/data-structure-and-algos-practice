// delete the middle node in a linked list

const { LinkedList } = require("./remove-duplicates");

LinkedList.prototype.deleteMiddleNode = function (nodeVal) {
  if (nodeVal === this.head.value || nodeVal === this.tail.value) return null;
  let current = this.head;

  while (current.next.value !== nodeVal) {
    current = current.next;
  }
  let removedNode = current.next;
  current.next = removedNode.next;

  return nodeVal;
};

let l = new LinkedList();
l.insert("a");
l.insert("b");
l.insert("c");
l.insert("d");
l.insert("e");

console.log(l.deleteMiddleNode("c"));
console.log(l);
