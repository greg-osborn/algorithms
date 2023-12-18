/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let output = [[]];
    for(const num of nums) {
        if(output.length == 0) output.push([num]);
        else {
            let run = [];
            while(output.length > 0) {
                const el = output.shift();
                    for(let index = 0; index <= el.length; index++) {
                        let temp = [...el];
                        temp.splice(index, 0, num);
                        run.push(temp);
                    }
            }
            output = [...run];
        }
    }
    return output;
};