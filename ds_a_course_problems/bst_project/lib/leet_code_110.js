// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isBalanced(root) {
  if (!root) return true;

  let left = getHeight(root.left);
  let right = getHeight(root.right);

  let heightDifference = Math.abs(left - right) <= 1;

  return heightDifference && isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(root) {
  if (!root) return -1;

  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

let a = new TreeNode(3);
let b = new TreeNode(9);
let c = new TreeNode(20);
let d = new TreeNode(15);
let e = new TreeNode(7);
a.left = b;
a.right = c;
c.left = d;
c.right = e;
console.log(isBalanced(a));
