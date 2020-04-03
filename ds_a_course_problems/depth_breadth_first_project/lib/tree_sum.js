function treeSum(root) {
  if (!root) return 0;
  let queue = [root];
  let sum = 0;

  while (queue.length) {
    let first = queue.shift();
    sum += first.val;
    if (first.left) queue.push(first.left);
    if (first.right) queue.push(first.right);
  }
  return sum;
}

module.exports = {
  treeSum,
};
