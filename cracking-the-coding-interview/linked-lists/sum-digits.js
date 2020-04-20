const { LinkedList, Node } = require("./remove-duplicates");

LinkedList.prototype.sumDigits = function (otherList) {
  let sum1 = this.sumSelf();
  let sum2 = otherList.sumSelf();

  let totalSum = (parseInt(sum1) + parseInt(sum2)).toString();
  let sumList = new LinkedList();

  while (totalSum.length) {
    sumList.insert(totalSum[0]);
    totalSum = totalSum.slice(1);
  }

  return sumList;
};

LinkedList.prototype.sumSelf = function () {
  if (!this.size()) return "";

  let lastDig = this.delete().toString();

  return (lastDig += this.sumSelf());
};

l1 = new LinkedList();
l1.insert(8);
l1.insert(5);
l1.insert(3);

// console.log(l1.sumSelf());

l2 = new LinkedList();
l2.insert(6);
l2.insert(1);
l2.insert(1);
