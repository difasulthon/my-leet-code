/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function levelOrderRec(root, level, res) {
    if(root === null) return

    if(res.length <= level) res.push([])

    res[level].push(root.val)

    levelOrderRec(root.left, level+1, res)
    levelOrderRec(root.right, level+1, res)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = []

    levelOrderRec(root, 0, res)

    return res
};