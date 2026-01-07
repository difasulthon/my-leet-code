/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function countNodesLevelOrder(root) {
  function levelOrderRec(root, level, res) {
    // Base case
    if (root === null) return;

    // Add a new level to the result if needed
    if (res.length <= level) res.push([]);

    // Add current node's data to its corresponding level
    res[level].push(root.val);

    // Recur for left and right children
    levelOrderRec(root.left, level + 1, res);
    levelOrderRec(root.right, level + 1, res);
  }

  function levelOrder(root) {
    const res = [];

    levelOrderRec(root, 0, res);

    return res;
  }

  const res = levelOrder(root);

  return res;
}

/**
 * Max Level Sum binary tree
 * @param {TreeNode} root - root
 * @return {number} - maxLevelSum
 */
const maxLevelSum = function(root) {
  const nodes = countNodesLevelOrder(root);

  const sums = [];

  for(const node of nodes) {
    let nodeSum = 0;
    for(const num of node) {
      nodeSum += num;
    }

    sums.push(nodeSum);
  }

  const maxValue = Math.max(...sums);
  const maxIndex = sums.indexOf(maxValue) + 1;

  return maxIndex;
};