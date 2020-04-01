// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.top = null;
    this.bottom = null;
  }

  push(value) {
    this.length += 1;
    let newTop;
    if (!this.top) {
      // if I don't have a top then this new node will be my top and bottom
      newTop = new Node(value);
      this.top = newTop;
      this.bottom = newTop;
    } else {
      // now if I do have a top I need to push
      // this node on the top of my stack
      let oldTop = this.top;
      newTop = new Node(value, oldTop);
      this.top = newTop;
    }

    return this.size();
  }

  pop() {
    if (!this.size()) return null;
    let oldTop = this.top;
    if (this.size() === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      // set my new top
      this.top = oldTop.next;
      if (this.length === 1) this.top = oldTop.next;
    }

    this.length -= 1;
    return oldTop.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
