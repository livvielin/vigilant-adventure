var secondLargest = function (root) {
  var previous = root;
  var current = root;
  while (current.left !== null || current.right !== null) {
    var previous = current;
    if (current.right) {
      current = current.right;
    } else {
      current = current.left;
    }
  }
  if (previous.right === null && previous.left !== null) {
    return previous.left.value;
  }
  return previous.value;
};

var Node = function (val) {
  this.value = val;
  this.left = null;
  this.right = null;
};

var root = new Node(5);
var child1 = new Node(2);
var child2 = new Node(7);
var grandchild1 = new Node(1);
var grandchild2 = new Node(3);
var grandchild3 = new Node(6);
var grandchild4 = new Node(8);
root.left = child1;
root.right = child2;
child1.left = grandchild1;
child1.right = grandchild2;
child2.left = grandchild3;
child2.right = grandchild4;

console.log(secondLargest(root)); // should return 7
