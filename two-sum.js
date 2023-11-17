/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create a cache object. it will have key of target - element
    // and value of element's index as we iterate through nums
    const cache = {};
    // iterate through nums
    for(let i = 0; i < nums.length; i++) {
        if(cache[nums[i]] != null) return [cache[nums[i]], i];
        cache[target - nums[i]] = i;
    }
};