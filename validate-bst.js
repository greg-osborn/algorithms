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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) return true;
    if(root.left && root.val <= root.left.val) return false;
    if(root.right && root.val >= root.right.val) return false;
    const check = (root) => {
        // returns [boolean, min, max]
        if(!root) return [true, Infinity, -Infinity];
        if(root.left && root.val <= root.left.val) return [false, 0, 0];
        if(root.right && root.val >= root.right.val) return [false, 0, 0];
        const left = check(root.left);
        const right = check(root.right);
        return [left[0] && right[0] && root.val > left[2] && root.val < right[1], Math.min(root.val, left[1], right[1]), Math.max(root.val, left[2], right[2])];
    }
    const left = check(root.left);
    const right = check(root.right);
    return left[0] && right[0] && root.val > left[2] && root.val < right[1];

    // // naive approach
    // if(!root) return true;
    // if(root.left && root.val <= root.left.val) return false;
    // if(root.right && root.val >= root.right.val) return false;
    // return isValidBST(root.left) && isValidBST(root.right);
};