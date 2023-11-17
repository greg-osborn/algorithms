/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // convert to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase();
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let newString = '';
    let index = 0;
    while(index < s.length) {
        if(alphanumeric.includes(s[index])) newString += s[index];
        index++;
    }

    // iterate through first half of newString
    // check each char to see if it matches the corresponding char from the second half
    index = 0;
    while(index < newString.length / 2) {
        if(newString[index] != newString[newString.length - index - 1]) return false;
        index++;
    }
    // if we haven't returned false, it is a palindrome
    return true;
};