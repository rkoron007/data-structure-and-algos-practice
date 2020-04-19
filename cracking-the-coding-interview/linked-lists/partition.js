// given a value
// all nodes less than x com before x or values greater than x
// all nodes greater come after
// if x in list you need to move it before all values less than x

const { LinkedList } = require("./remove-duplicates");

LinkedList.prototype.partition = function (partitionVal) {
  let current = this.head;
  let left = new LinkedList();
  let right = new LinkedList();

  while (current) {
    if (current.value < partitionVal) {
      left.insert(current.value);
    } else {
      right.insert(current.value);
    }
    current = current.next;
  }

  return left.mergeLists(right);
};

LinkedList.prototype.mergeLists = function (linkedlist) {
  let mergeLLnode = linkedlist.head;
  while (mergeLLnode) {
    this.insert(mergeLLnode.value);
    mergeLLnode = mergeLLnode.next;
  }

  return this;
};

let l1 = new LinkedList();

l1.insert(3);
l1.insert(5);
l1.insert(8);
l1.insert(5);
l1.insert(10);
l1.insert(2);
l1.insert(1);

console.log(l1.partition(5));
