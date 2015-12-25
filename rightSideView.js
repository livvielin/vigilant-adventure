/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 Given a binary tree, imagine yourself standing on the right side of it,
 return the values of the nodes you can see ordered from top to bottom.
 */
var rightSideView = function (root) {
  if (root === null) {
    return [];
  }
  var results = [root.val];
  var currentNode = root;
  // iterate through right side until reaching end
  // if no right side, go to left
  // if no right or left, end
  while (true) {
    if (root.right !== null) {
      results.push(root.right.val);
      currentNode = root.right;
    } else if (root.left !== null) {
      results.push(root.left.val);
      currentNode = root.left;
    } else {
      break;
    }
  }
  return results;
};
