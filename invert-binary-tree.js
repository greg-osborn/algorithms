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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // // create a new root to return
    // const invertRoot;
    // create a helper function to flip a node
    const flip = (node) => {
        if(node == null) return null;
        return new TreeNode(node.val, flip(node.right), flip(node.left));
    }
    return flip(root);
};