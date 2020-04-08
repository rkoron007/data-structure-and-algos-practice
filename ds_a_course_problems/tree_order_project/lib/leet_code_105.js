// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// preorder:
// - self, left, right

// inorder:
// left, self, right
const { TreeNode } = require("./tree_node.js");
// find where my root is in inorder
// then call buildtree on the left tree with in and pre order
// then call buildtree on the right with in and pre order
// function buildTree(preorder, inorder) {
//   const node = new TreeNode(preorder.shift());
//   if (preorder.length <= 1 || inorder.length <= 1) return node;

//   // remove our root node value
//   let leftInorder;
//   let rightInorder;

//   for (let i = 0; i < inorder.length; i++) {
//     let value = inorder[i];
//     if (value === node.val) {
//       leftInorder = inorder.slice(0, i);
//       rightInorder = inorder.slice(i + 1, inorder.length);
//       break;
//     }
//   }

//   let leftPreOrder = findOrder(leftInorder, preorder);
//   let RightPreOrder = findOrder(rightInorder, preorder);

//   let leftNode = buildTree(leftPreOrder, leftInorder);
//   node.left = leftNode;
//   let rightTree = buildTree(RightPreOrder, rightInorder);
//   node.right = rightTree;
//   return node;
// }

// function findOrder(newinOrder, oldpreOrder) {
//   let newpreOrder = [];
//   for (let i = 0; i < oldpreOrder.length; i++) {
//     if (newinOrder.includes(oldpreOrder[i])) {
//       newpreOrder.push(oldpreOrder[i]);
//     }
//   }
//   return newpreOrder;
// }

function buildTree(preorder, inorder) {
  const node = new TreeNode(preorder.shift());
  if (!preorder.length && !inorder.length) return null;

  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);

  let rootIdx = inorder.indexOf(rootVal);

  let leftInorder = inorder.slice(0, rootIdx);
  let rightInorder = inorder.slice(rootIdx + 1);

  let leftPreorder = preorder.filter(el => leftInorder.includes(el));
  let rightPreorder = preorder.filter(el => rightInorder.includes(el));

  let leftTree = buildTree(leftPreorder, leftInorder);
  let rightTree = buildTree(rightInorder, rightPreorder);

  root.left = leftTree;
  root.right = rightTree;

  return root;
}

preorder = [3, 9, 20, 15, 7];
inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
