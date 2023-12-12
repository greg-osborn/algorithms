/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // find the low and high indices for newInterval
    let lowIndex = 0; 
    let highIndex = intervals.length - 1;
    while(lowIndex < intervals.length && newInterval[0] > intervals[lowIndex][1]) lowIndex++;
    while(highIndex >= lowIndex && newInterval[1] < intervals[highIndex][0]) highIndex--;
    // case 1: newInterval doesn't overlap any existing intervals
    if(lowIndex > highIndex) intervals.splice(lowIndex, 0, newInterval);
    // case 2: newInterval overlaps existing interval(s)
    else intervals.splice(lowIndex, highIndex - lowIndex + 1, [Math.min(intervals[lowIndex][0], newInterval[0]), Math.max(intervals[highIndex][1], newInterval[1])]);
    return intervals;
};