/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // edge case: intervals is 1 element
    if(intervals.length == 1) return intervals;
    // sort copy of intervals
    let copy = [...intervals];
    copy.sort((a,b) => {
        return a[0] - b[0];
    });
    // iterate through copy, combining overlapping intervals and pushing to output array
    let index = 0;
    let end = 1;
    let output = [];
    while(index < copy.length) {
        let intMax = Math.max(copy[index][1], copy[end - 1][1]);
        while(end < copy.length && copy[end][0] <= intMax) {
            intMax = Math.max(intMax, copy[end++][1]);
        }
        output.push([copy[index][0], intMax]);
        index = end;
        end = index + 1;
    }
    return output;
};