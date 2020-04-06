const { GraphNode } = require("./graph_node");

// function maxValue(node) {
//   if (!node) return 0;
//   let visited = new Set();
//   let highValue = -Infinity;
//   const queue = [node];

//   while (queue.length) {
//     let cNode = queue.shift();
//     if (cNode.val > highValue) highValue = cNode.val;
//     if (visited.has(cNode)) continue;
//     visited.add(cNode);
//     queue.push(...cNode.neighbors);
//   }

//   return highValue;
// }

function maxValue(node, highValue = 0, visited = new Set()) {
  if (!node) return highValue;

  if (visited.has(node.val)) return highValue;
  if (node.val > highValue) highValue = node.val;
  visited.add(node.val);

  node.neighbors.forEach((neighb) => {
    // returns a number
    let neighborVal = maxValue(neighb, highValue, visited);
    highValue = neighborVal > highValue ? neighborVal : highValue;
  });

  return highValue;
}

let five = new GraphNode(5);
let three = new GraphNode(3);
let two = new GraphNode(2);
let four = new GraphNode(4);
let ten = new GraphNode(10);
let seven = new GraphNode(7);
let six = new GraphNode(6);
five.neighbors = [three, two, four];
two.neighbors = [seven, ten];
four.neighbors = [six];
console.log(maxValue(five));

module.exports = {
  maxValue,
};
