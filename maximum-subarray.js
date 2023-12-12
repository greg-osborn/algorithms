/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // iterate through nums
    let max = -Infinity;
    let current = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        current = Math.max(current + nums[i], nums[i]);
        max = Math.max(max, current);
    }
    return max;
};