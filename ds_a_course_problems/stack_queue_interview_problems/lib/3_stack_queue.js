// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push
//   - Pop
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
  // TODO: Implement the Node class!
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  // TODO: Implement the Stack class!
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(node) {
    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      let oldTop = this.top;
      this.top = node;
      this.top.next = oldTop;
    }
    this.length += 1;
    return this.size();
  }

  pop() {
    if (!this.size()) return null;
    let oldTop = this.top;
    if (this.size() === 1) {
      this.bottom = null;
      this.top = null;
    } else {
      this.top = oldTop.next;
    }

    this.length -= 1;
    if (this.size() === 1) this.top = this.bottom;
    return oldTop;
  }

  size() {
    return this.length;
  }

  peekTop() {
    return this.top;
  }

  peekBottom() {
    return this.bottom;
  }
}

class StackQueue {
  // TODO: Implement the StackQueue class!
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const newQueueNode = new Node(val);
    if (!this.front) {
      this.front = newQueueNode;
      this.back = newQueueNode;
    } else {
      this.back.next = newQueueNode;
      this.back = newQueueNode;
    }

    this.inStack.push(new Node(newQueueNode.value));
    // console.log(this.front);
    return this.size();
  }

  dequeue() {
    if (!this.size()) {
      this.front = null;
      this.back = null;
    }

    if (!this.outStack.size()) {
      while (this.inStack.size()) {
        this.outStack.push(this.inStack.pop());
      }
    }

    let popped = this.outStack.pop();
    this.front = this.outStack.peekTop() || this.inStack.peekBottom();
    if (!this.size()) {
      this.back = this.front;
    }
    return popped;
  }

  size() {
    return this.inStack.size() + this.outStack.size();
  }
}

let sq = new StackQueue();
sq.enqueue("A");
sq.enqueue("B");
sq.enqueue("C");
sq.dequeue();
console.log(sq);

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
