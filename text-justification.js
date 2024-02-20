/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let reversed = words.reverse();
    const output = [];
    while(reversed.length > 0) {
        let lineLength = 0;
        let thisLine = [];
        while(lineLength + thisLine.length - 1 <= maxWidth && reversed.length !== 0) {
            let word = reversed.pop();
            thisLine.push(word);
            lineLength += word.length;
        }
        // last line
        if(reversed.length == 0 && lineLength + thisLine.length -1 <= maxWidth) {
            let outputLine = thisLine.join(' ');
            outputLine += ' '.repeat(maxWidth - outputLine.length);
            output.push(outputLine);
        }
        // not last line
        else {
            let extraWord = thisLine.pop();
            reversed.push(extraWord);
            lineLength -= extraWord.length;
            let outputLine = '';
            //multiple words
            if(thisLine.length > 1) {
                let spaces = Math.floor((maxWidth - lineLength) / (thisLine.length - 1));
                let extraSpaces = (maxWidth - lineLength) % (thisLine.length - 1);
                for(let i = 0; i < thisLine.length - 1; i++) {
                    // extra space
                    if(i < extraSpaces) outputLine += thisLine[i] + ' '.repeat(spaces + 1);
                    // no extra space
                    else outputLine += thisLine[i] + ' '.repeat(spaces);
                }
                outputLine += thisLine[thisLine.length - 1];
            }
            // single word
            else outputLine = thisLine[0] + ' '.repeat(maxWidth - lineLength);
            output.push(outputLine);
        }
    }
    return output;
};