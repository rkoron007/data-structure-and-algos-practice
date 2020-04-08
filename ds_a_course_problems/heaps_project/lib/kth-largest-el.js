class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getLeftChildIdx(idx) {
    return idx * 2;
  }
  getRightChildIdx(idx) {
    return idx * 2 + 1;
  }

  getParentIdx(idx) {
    return Math.floor(idx / 2);
  }

  insert(val) {
    this.array.push(val);

    this.siftUp(this.array.length - 1);

    return val;
  }

  siftUp(idx) {
    if (idx === 1) return;
    let parIdx = this.getParentIdx(idx);
    let parentValue = this.array[parIdx];
    let cValue = this.array[idx];
    if (cValue > parentValue) {
      [this.array[idx], this.array[parIdx]] = [
        this.array[parIdx],
        this.array[idx],
      ];
    } else {
      return;
    }
    this.siftUp(parIdx);
  }

  delete() {
    let length = this.array.length;
    if (length <= 2) return this.array.pop();

    let max = this.array[1];

    [this.array[1], this.array[length - 1]] = [
      this.array[length - 1],
      this.array[1],
    ];

    this.array.pop();

    this.siftDown(1);
    return max;
  }

  siftDown(idx) {
    let leftIdx = this.getLeftChildIdx(idx);
    let rightIdx = this.getRightChildIdx(idx);

    let left = this.array[leftIdx] ? this.array[leftIdx] : -Infinity;
    let right = this.array[rightIdx] ? this.array[rightIdx] : -Infinity;
    let cValue = this.array[idx];

    if (cValue > left && cValue > right) return;

    if (left > right) {
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
}

const findKthLargest = (nums, k) => {
  let heap = new MaxHeap();
  nums.forEach((num) => {
    heap.insert(num);
  });

  let max = heap.delete();

  for (let i = 1; i < k; i++) {
    max = heap.delete();
  }

  return max;
};

console.log(findKthLargest([1], 1));
