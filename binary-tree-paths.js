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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const output = [];
    const addNode = (node, path) => {
        if(node.left) {
            if(path == '') addNode(node.left, node.val);
            else addNode(node.left, path + '->' + node.val);
        }
        if(node.right) {
            if(path == '') addNode(node.right, node.val);
            else addNode(node.right, path + '->' + node.val);
        }
        if(!node.left && !node.right) {
            if(path == '') output.push(path + node.val);
            else output.push(path + '->' + node.val);
        }
    }
    addNode(root, '');
    return output;
};