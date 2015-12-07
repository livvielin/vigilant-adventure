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

// in-order traversal
// visit left branch, then current node, then right branch
var inOrderTraversal = function (node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
};

console.log('in order traversal');
inOrderTraversal(root);

// pre-order traversal
// visit current node before child nodes
var preOrderTraversal = function (node) {
  if (node !== null) {
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
};

console.log('pre order traversal');
preOrderTraversal(root);

// post-order traversal
// visit current node after child nodes
var postOrderTraversal = function (node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
  }
};

console.log('post order traversal');
postOrderTraversal(root);
