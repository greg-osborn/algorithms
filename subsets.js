/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const output = [[]];
    for(const num of nums) {
        let copy = [...output];
        for(const curr of copy) {
            output.push([...curr, num]);
        }
    }
    return output;
};