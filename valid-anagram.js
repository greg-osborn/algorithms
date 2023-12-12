/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    // iterate through s, building hashmap of letters in it
    const map = {};
    for(let i = 0; i < s.length; i++) {
        if(!map[s[i]]) map[s[i]] = 0;
        map[s[i]]++;
    }
    // iterate through t, checking each letter against hashmap
    // and modifying hashmap accordingly
    let index = 0;
    while(index < t.length) {
        if(!map[t[index]]) return false;
        if(map[t[index]] == 1) delete map[t[index]];
        else map[t[index]]--;
        index++;
    }
    return true;
};