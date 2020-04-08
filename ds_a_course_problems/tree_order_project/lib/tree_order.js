const { TreeNode } = require("./tree_node.js");

function inOrderArray(root = this.root) {
  if (!root) return [];

  let left = inOrderArray(root.left);
  let right = inOrderArray(root.right);
  return left.concat([root.val]).concat(right);
}

function postOrderArray(root) {
  if (!root) return [];

  let left = postOrderArray(root.left);
  let right = postOrderArray(root.right);
  return left.concat(right).concat([root.val]);
}

function preOrderArray(root) {
  if (!root) return [];

  let left = preOrderArray(root.left);
  let right = preOrderArray(root.right);
  return [root.val].concat(left).concat(right);
}

const root = new TreeNode(10);
let b = new TreeNode(5);
let c = new TreeNode(16);
let d = new TreeNode(1);
let e = new TreeNode(7);
let f = new TreeNode(15);
root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(preOrderArray(root));

module.exports = {
  inOrderArray,
  postOrderArray
};
