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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const array = [];
    const dfs = (root) => {
        if(root) {
            // console.log(`val: ${root.val}. array: ${array}`);
            const left = dfs(root.left);
            if(left) return left;
            array.push(root.val);
            if(array.length >= k) return array[k - 1];
            const right = dfs(root.right);
            if(right) return right;
        }
    }
    return dfs(root);
};