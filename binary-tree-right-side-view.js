/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const nodeCache = [];
    const rightNode = (root, level) => {
        if(!root) return null;
        rightNode(root.right, level + 1);
        if(nodeCache[level] == undefined) nodeCache[level] = root.val;
        rightNode(root.left, level + 1);
    }
    rightNode(root, 0);
    return nodeCache;
};