const { GraphNode } = require("./graph_node");

function breadthFirstSearch(startingNode, targetVal) {
  if (!startingNode) return null;
  let queue = [startingNode];
  let visited = new Set();

  while (queue.length) {
    let head = queue.shift();
    if (visited.has(head)) continue;
    visited.add(head);
    if (head.val === targetVal) return head;

    queue.push(...head.neighbors);
  }

  return null;
}

let u = new GraphNode("u");
let v = new GraphNode("v");
let w = new GraphNode("w");
u.neighbors = [v];
v.neighbors = [u, w];

breadthFirstSearch(u, "w");
module.exports = {
  breadthFirstSearch,
};
