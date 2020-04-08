// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBST(nums, root = null) {
  // if I don't have nums then just return my root
  if (nums.length === 0) return null;

  let middle = Math.floor(nums.length / 2);

  let newRoot = new TreeNode(nums[middle]);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle + 1);

  newRoot.left = sortedArrayToBST(left, newRoot);
  newRoot.right = sortedArrayToBST(right, newRoot);
  return newRoot;
}

arr = [-10, -3, 0, 5, 9];

console.log(sortedArrayToBST(arr));
