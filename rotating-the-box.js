/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    // work from right to left
    // keep a running array of where row i would fall to
    let stop = new Array(box.length).fill(box[0].length - 1);
    let output = new Array(box[0].length);
    for(let col = box[0].length - 1; col >= 0; col--) {
        output[col] = new Array(box.length);
        for(let row = 0; row < box.length; row++) {
            switch (box[row][col]) {
                case ".":
                    output[col][box.length - row - 1] = ".";
                    break;
                case "#": 
                    output[col][box.length - row - 1] = ".";
                    output[stop[row]][box.length - row - 1] = "#";
                    stop[row]--;
                    break;
                case "*": 
                    output[col][box.length - row - 1] = "*";
                    stop[row] = col - 1;
                    break;
            }

        }
    }
    return output;
};