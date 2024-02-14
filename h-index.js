/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // improved solution. O(n)
    let array = new Array(Math.min(citations.length + 1, 1000)).fill(0);
    let max = 0;
    for(let cit of citations) {
        cit = Math.min(cit, citations.length);
        array[cit]++;
        max = Math.max(max, cit);
    }
    // console.log(array);
    let addon = 0;
    while(max > 0) {
        // console.log(`max: ${max}. addon: ${addon}. array: ${array}`);
        if(array[max] + addon >= max) return max;
        addon += array[max];
        max--;
    }
    return max;


    // initial solution. O(n^2)
    // if(citations.length == 1 && citations[0] == 0) return 0;
    // // 0-index array where value at each index is # citations for that # of papers
    // let array = new Array(Math.min(citations.length + 1, 1000)).fill(0);
    // for(let cit of citations) {
    //     for(let i = 0; i <= cit; i++) {
    //         array[i]++;
    //     }
    //     // console.log(`cit: ${cit}. array: ${array}`)
    // }
    // // console.log(array);
    // let hIndex = 0;
    // while(hIndex < array.length && array[hIndex] >= hIndex) hIndex++;
    // // if(hIndex != array.length) return --hIndex;
    // return --hIndex;
};