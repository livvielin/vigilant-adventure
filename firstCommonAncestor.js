// function to find first common ancestor of two nodes in binary tree
var firstCommonAncestor = function (node1, node2) {
  //
};

// tree node class
var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
};

var root = new TreeNode(4);
var child1 = new TreeNode(2);
var child2 = new TreeNode(7);
var grandchild1 = new TreeNode(1);
var grandchild2 = new TreeNode(3);
var grandchild3 = new TreeNode(6);
var grandchild4 = new TreeNode(9);
root.left = child1;
root.right = child2;
child1.left = grandchild1;
child1.right = grandchild2;
child2.left = grandchild3;
child2.right = grandchild4;
