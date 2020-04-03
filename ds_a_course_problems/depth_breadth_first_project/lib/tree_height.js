const { TreeNode } = require("./tree_node");
function treeHeight(root) {
  if (!root) return -1;
  //   if (!root.left || !root.right) return 0;
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}

module.exports = {
  treeHeight,
};

let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
treeHeight(a);
