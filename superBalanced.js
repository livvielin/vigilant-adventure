// function to determine whether difference between depths
// of any two leaf nodes in a binary tree is no greater than 1
var superBalanced = function (root) {
  // stop when we find more than 2
  var depths = [];

  // stack to store tuples of [node, depth]
  var nodes = [];
  nodes.push([root, 0]);

  while (nodes.length) {
    // pop a node and its depth from the top of the stack
    var node = nodes.pop();
    // if the node is a leaf
    if (!node.left && !node.right) {
      // we only care if it's a new depth
      if (depths.indexOf(node[1]) !== -1) {
        depths.push(node[1]);

        // unbalanced if more than 2 different leaf depths
        // or 2 leaf depths that are more than 1 apart
        if (depths.length > 2 || depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1) {
          return false;
        }
      }
    }
    // otherwise, keep stepping down
    else {
      if (node.left) {
        nodes.push([node.left, node[1] + 1]);
      }
      if (node.right) {
        nodes.push([node.right, node[1] + 1]);
      }
    }
    return true;
  }
};

var Node = function (value) {
  this.value = value;
  this.right = null;
  this.left = null;
};
