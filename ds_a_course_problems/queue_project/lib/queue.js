// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let node;
    if (!this.back) {
      node = new Node(value);
      this.front = node;
      this.back = node;
    } else {
      let oldTail = this.back;

      node = new Node(value);
      oldTail.next = node;
      this.back = node;
    }

    this.length += 1;
    return this.size();
  }

  dequeue() {
    if (!this.size()) return null;
    let oldfront = this.front;

    if (this.size() === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = oldfront.next;
    }

    this.length -= 1;
    if (this.size() === 1) this.back = this.front;
    return oldfront.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
