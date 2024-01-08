/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // attempt to refactor for performance
    // use a Map to cache chars in current nonrepeating substring
    // for each char in s, if it's in Map, delete all chars added to Map before it and it
    // add char to Map
    // update longest
    const cache = new Map();
    let longest = 0;
    s.split('').map(char => {
        if(cache.has(char)) {
            let keys = cache.keys();
            let val = keys.next().value;
            while(val != char) {
                cache.delete(val);
                val = keys.next().value;
            }
            cache.delete(char);
        }
        cache.set(char, true);
        longest = Math.max(longest, cache.size);
    })
    return longest;

    // previous solution
    // //iterate through s with for loop
    //     //for each letter, look for the index of the next appearance
    //     //store the length of the longest substring and update if this one is longer
    // if(s.length === 1) {
    //     return 1;
    // }

    // let longest = [];

    // for(let i = 0; i < s.length - 1; i++) {
    //     let current = [s[i]];
    //     for(let j = i + 1; j< s.length; j++) {
    //         if(!current.includes(s[j])) {
    //             current.push(s[j]);
    //             if(current.length > longest.length) {
    //                 longest = current;
    //             }
    //         }
    //         else {
    //             if(current.length > longest.length) {
    //                 longest = current;
    //             }
    //             break;
    //         }
    //     }
        
    //     if(longest.length > s.length - i) {
    //         return longest.length;
    //     }
    // }
    // return longest.length;
};