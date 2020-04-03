const { TreeNode } = require("./tree_node");

function breadthFirstArray(root) {
  if (!root) return null;
  let queue = [root];
  let nodeVals = [];

  while (queue.length > 0) {
    let first = queue.shift();
    nodeVals.push(first.val);
    if (first.left) queue.push(first.left);
    if (first.right) queue.push(first.right);
    root = first;
  }

  return nodeVals;
}

// let a = new TreeNode("a");
// let b = new TreeNode("b");
// let c = new TreeNode("c");
// let d = new TreeNode("d");
// let e = new TreeNode("e"); // let f = new TreeNode("f");
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(breadthFirstArray(a));

module.exports = {
  breadthFirstArray,
};
