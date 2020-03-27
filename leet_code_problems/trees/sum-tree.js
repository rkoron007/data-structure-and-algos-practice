class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(num) {
    let node = new Node(num);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // if left is null insert node here
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      // if left is null insert node here
      if (node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null recurr until
        // null is found
        this.insertNode(node.left, newNode);
      }
    }
  }

  sumLeft() {
    let sum = this.root.value;
    let node = this.root;

    while ((node = node.left)) {
      sum += node.value;
    }

    return sum;
  }

  sumRight() {
    let sum = this.root.value;
    let node = this.root;
    console.log(node);
    while ((node = node.right)) {
      sum += node.value;
    }

    return sum;
  }
}

const arr = [1, 4, 100, 5];

const solution = arr => {
  let bTree = new BinaryTree();
  for (let index = 0; index < arr.length; index++) {
    let num = arr[index];
    if (num < 0) continue;
    bTree.insert(num);
  }

  let sumLeft = bTree.sumLeft();
  let sumRight = bTree.sumRight();

  if (sumLeft === sumRight) return "";
  return sumLeft >= sumRight ? "Left" : "Right";
};

console.log(solution(arr));
