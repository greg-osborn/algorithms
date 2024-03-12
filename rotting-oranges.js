/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // build an array of coords of rotten oranges
    // iterate through it and infect adjacent fresh oranges
    // repeat until no fresh oranges have been infected
    const rotten = [];
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 2) rotten.push([i, j]);
        }
    }
    let length = output = 0;
    while(length != rotten.length) {
        length = rotten.length;
        output++;
        for(let i = 0; i < length; i++) {
            let [r, c] = rotten[i];
            if(r > 0 && grid[r - 1][c] == 1) {
                grid[r - 1][c] = 2;
                rotten.push([r - 1, c]);
            }
            if(r < grid.length - 1 && grid[r + 1][c] == 1) {
                grid[r + 1][c] = 2;
                rotten.push([r + 1, c]);
            }
            if(c > 0 && grid[r][c - 1] == 1) {
                grid[r][c - 1] = 2;
                rotten.push([r, c - 1]);
            }
            if(c < grid[0].length - 1 && grid[r][c + 1] == 1) {
                grid[r][c + 1] = 2;
                rotten.push([r, c + 1]);
            }
        }
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1) return -1;
        }
    }
    return Math.max(0, --output);
};