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

// depth first search
var DFSearch = function (node) {
  if (node === null) {
    return;
  }
  console.log(node.value);
  node.visited = true;
  node.children.forEach(function (n) {
    if (!n.visited) {
      DFSearch(n);
    }
  });
};

// console.log('depth first search');
// DFSearch(node0);

var Queue = function () {
  this.storage = [];
};

Queue.prototype.enqueue = function (value) {
  this.storage.push(value);
};

Queue.prototype.dequeue = function () {
  var dequeued = this.storage[0];
  this.storage = this.storage.slice(1);
  return dequeued;
};

// breadth first search
var BFSearch = function (node) {
  var queue = new Queue();
  node.visited = true;
  queue.enqueue(node);

  while (queue.storage.length !== 0) {
    var n = queue.dequeue();
    console.log(n.value);
    n.children.forEach(function (child) {
      if (!child.visited) {
        child.visited = true;
        queue.enqueue(child);
      }
    });
  }
};

console.log('breadth first search');
BFSearch(node0);
