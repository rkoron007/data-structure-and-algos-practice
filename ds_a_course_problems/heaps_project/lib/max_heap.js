class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);

    return val;
  }

  siftUp(idx) {
    if (idx === 1) return idx;
    let cValue = this.array[idx];
    let parentIdx = this.getParent(idx);
    let parent = this.array[parentIdx];

    if (cValue > parent) {
      [this.array[idx], this.array[parentIdx]] = [
        this.array[parentIdx],
        this.array[idx],
      ];
    } else {
      return;
    }
    this.siftUp(parentIdx);
  }

  siftDown(idx) {
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftChild = this.array[leftIdx] ? this.array[leftIdx] : -Infinity;
    let rightChild = this.array[rightIdx] ? this.array[rightIdx] : -Infinity;
    let parent = this.array[idx];

    if (parent > leftChild && parent > rightChild) return;

    if (leftChild > rightChild) {
      [this.array[idx], this.array[leftIdx]] = [
        this.array[leftIdx],
        this.array[idx],
      ];
      this.siftDown(leftIdx);
    } else {
      [this.array[idx], this.array[rightIdx]] = [
        this.array[rightIdx],
        this.array[idx],
      ];
      this.siftDown(rightIdx);
    }
  }

  deleteMax() {
    let length = this.array.length;
    if (length === 1) return null;
    if (length === 2) return this.array.pop();

    let max = this.array[1];

    [this.array[1], this.array[length - 1]] = [
      this.array[length - 1],
      this.array[1],
    ];
    this.array.pop();
    this.siftDown(1);

    return max;
  }
}

let mh = new MaxHeap();

// mh.insert(42);
// mh.insert(32);
// mh.insert(24);
// mh.insert(100);
// mh.delete();

// console.log(mh);

module.exports = {
  MaxHeap,
};
