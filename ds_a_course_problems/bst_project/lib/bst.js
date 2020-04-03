class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    if (!root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
        // console.log(root);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }

  searchRecur(val, root = this.root) {
    if (!root) return false;

    if (val < root.val) {
      return this.searchRecur(val, root.left);
    } else if (val > root.val) {
      return this.searchRecur(val, root.right);
    } else {
      return true;
    }
  }

  searchIter(val, root = this.root) {
    if (!root) return false;
    if (root.val === val) return true;

    let leaf = val < root.val ? root.left : root.right;
    while (leaf) {
      if (leaf.val === val) return true;
      leaf = val < leaf.val ? leaf.left : leaf.right;
      //   console.log(leaf);
    }
    return false;
  }
}

let bst = new BST();

bst.insert(2);
bst.insert(1);
bst.insert(4);
console.log(bst);

module.exports = {
  TreeNode,
  BST
};
