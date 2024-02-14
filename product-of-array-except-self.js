/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeroCount = 0;
    let product = nums.reduce((accum, el) => {
        if(el == 0) {
            zeroCount++;
            return accum;
        }
        else return accum * el;
    }, 1);
    if(zeroCount > 1) return new Array(nums.length).fill(0);
    let output = [];
    if(zeroCount == 1) {
        for(let el of nums) {
            if(el == 0) output.push(product);
            else output.push(0);
        }
    }
    else {
        for(let el of nums) output.push(product / el);
    }
    return output;
};