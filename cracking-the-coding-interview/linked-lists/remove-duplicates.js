class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let oldTail = this.tail;
      oldTail.next = node;
    }
    this.tail = node;
    this.length++;

    return this.size();
  }

  delete() {
    if (!this.size()) return null;
    let oldTail = this.tail;
    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      let newTail;

      while (currentNode.next) {
        newTail = currentNode;

        currentNode = currentNode.next;
      }

      newTail.next = null;
      this.tail = newTail;
    }

    this.length -= 1;
    return oldTail.val;
  }

  size() {
    return this.length;
  }

  // this function will remove duplicates from a LL
  removeDuplicatesHash() {
    let currentNode = this.head;
    let uniqueEls = {};
    let prev;

    while (currentNode) {
      if (uniqueEls[currentNode.value]) {
        // I need to set this element to look at it's next pointer
        prev.next = currentNode.next;
        if (!currentNode.next) this.tail = prev;
      } else {
        uniqueEls[currentNode.value] = currentNode;
        prev = currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  removeDuplicates() {
    let current = this.head;

    while (current) {
      let runner = current;
      while (runner.next) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
          if (!runner.next) {
            this.tail = runner;
          }
          this.length--;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }
}

let l = new LinkedList();
l.insert("a");
l.insert("c");
l.insert("b");
l.insert("a");
l.insert("a");

l.removeDuplicates();
console.log(l);
