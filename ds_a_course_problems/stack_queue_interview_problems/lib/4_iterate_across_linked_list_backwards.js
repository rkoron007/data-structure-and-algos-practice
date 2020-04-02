// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished,
// return a string representing the original linked list's values backwards
// in the following format:
//
//                             'A -> B -> C -> D'
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
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

// function iterateAcrossLinkedListBackwards(linkedList) {
//   // TODO: Implement the iterateAcrossLinkedListBackwards function here
//   if (!linkedList.length) return "";
//   let head = linkedList.head;
//   let node = head;
//   let next = null;
//   let prev = null;
//   let str = `${node.value}`;
//   while ((next = node.next)) {
//     node.next = prev;
//     prev = node;
//     let newStr = `${next.value} -> `;
//     str = newStr + str;
//     node = next;
//   }

//   linkedList.tail = head;
//   linkedList.head = node;
//   linkedList.head.next = prev;

//   //   this.tail = head;
//   return str;
// }

function iterateAcrossLinkedListBackwards(linkedList) {
  if (!linkedList.length) return "";
  let stack = new Stack();
  let node = linkedList.head;
  let str = ``;

  while (node !== null) {
    stack.push(node);
    node = node.next;
  }

  while (stack.size() > 0) {
    if (stack.size() > 1) {
      str += `${stack.pop().value} -> `;
    } else {
      str += `${stack.pop().value}`;
    }
  }

  //   str += `${stack.pop()}`;

  return str;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
