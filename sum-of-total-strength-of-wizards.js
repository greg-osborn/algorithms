/**
 * @param {number[]} strength
 * @return {number}
 */
var totalStrength = function(strength) {
    // straightforward approach. this timed out on longer inputs (failed at 64/82).
    // generate all possible contiguous subarrays
    // for each subarray, calculate total strength and add it to running total
    // mod total and return
    // let totalStr = 0;
    // strength.forEach((el, index) => {
    //     for(let i = index + 1; i <= strength.length; i++) {
    //         let slice = strength.slice(index, i);
    //         let min = Infinity;
    //         let total = 0;
    //         slice.forEach(subel => {
    //             min = Math.min(subel, min);
    //             total += subel;
    //         });
    //         totalStr += (min * total);
    //     }
    // })
    // return (totalStr % (Math.pow(10, 9) + 7));

    // attempt to get more performant. this timed out on 67/82
    let totalStr = 0;
    // cache object will contain key-value pairs
    // keys will be starting indices of subarrays
    // values will be 2-element array
    // [running min, running total]
    const cache = {};
    strength.forEach((el, index) => {
        cache[el] = [el, el];
        totalStr += cache[el][0] * cache[el][1];
        for(let i = index + 1; i < strength.length; i++) {
            cache[el] = [Math.min(cache[el][0], strength[i]), cache[el][1] + strength[i]];
            totalStr += cache[el][0] * cache[el][1];
        }
    })
    return (totalStr % (10 ** 9 + 7));
};