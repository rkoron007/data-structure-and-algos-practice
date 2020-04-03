function depthFirstSearch(root, targetVal) {
  if (!root) return null;
  if (root.val === targetVal) return root;

  let leftBranch = depthFirstSearch(root.left, targetVal);
  let rightBranch = depthFirstSearch(root.right, targetVal);

  if (leftBranch) return leftBranch;
  if (rightBranch) return rightBranch;
  return null;
}

module.exports = {
  depthFirstSearch,
};
