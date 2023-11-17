/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // if length of s is odd, parens can't be balanced
    if(s.length % 2 === 1) return false;

    // create an object to link paren types
    let parens = {
        '(': ')', 
        '{': '}', 
        '[': ']'
    };

    // use a stack array to keep track of which paren we expect to close next
    const stack = [];

    // iterate through s
    let index = 0;
    while(index < s.length) {
        // if this char is an open paren, push its corresponding close paren to stack
        if(parens[s[index]]) stack.push(parens[s[index]]);
        // if this char is a close paren, compare it to the close paren we expect
        else if(s[index] !== stack.pop()) return false;
        index++;
    }
    // if we haven't returned false, check if any unclosed parens remain
    if(stack.length === 0) return true;
    return false;
};