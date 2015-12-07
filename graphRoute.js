// function to find whether there is a route between two nodes
var graphRoute = function (start, end) {
  // depth first search on start node, return true if end node is found
  var found = false;
  // can also do breadth first search
  var search = function (node) {
    if (node === null) {
      return;
    }
    node.visited = true;
    if (node.value === end.value) {
      found = true;
    }
    node.children.forEach(function (n) {
      if (!n.visited) {
        search(n);
      }
    });

  };
  search(start);
  // return false if not found
  return found;
};

var Graph = function () {
  var nodes = [];
};

var Node = function (val) {
  this.value = val;
  this.children = [];
};

var node0 = new Node(0);
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
node0.children = [node1, node4, node5];
node1.children = [node3, node4];
node2.children = [node1];
node3.children = [node2, node4];

console.log(graphRoute(node0, node4)); // should return true
console.log(graphRoute(node1, node5)); // should return false
