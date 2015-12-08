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

var root2 = new Node(4);
var child21 = new Node(2);
var child22 = new Node(7);
var grandchild21 = new Node(1);
var grandchild22 = new Node(3);
var grandchild23 = new Node(9);
var grandchild24 = new Node(8);
root2.left = child21;
root2.right = child22;
child21.left = grandchild21;
child21.right = grandchild22;
child22.left = grandchild23;
child22.right = grandchild24;

var lastValue = null;
// function to check whether a tree is a valid BST
var validateBST = function (node) {
  if (node === null) {
    return true;
  }
  if (!validateBST(node.left)) {
    return false;
  }
  if (lastValue !== null && node.value <= lastValue) {
    return false;
  }
  lastValue = node.value;
  if (!validateBST(node.right)) {
    return false;
  }
  return true;
};

console.log(validateBST(root)); // should return true
console.log(validateBST(root2)); // should return false
