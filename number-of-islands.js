/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let output = 0;

    // iterate over grid
        // if it's '1', increment output and DFS
    // return output

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == '1') {
                output++;
                DFS(i, j);
            }
        }
    }
    return output;

    function DFS(row, col) {
        // edge case checking
        // if value at row, col is '0', return
        // set value to '0' and DFS surrounding coords
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;
        if(grid[row][col] == '0') return;
        grid[row][col] = '0';
        DFS(row - 1, col);
        DFS(row + 1, col);
        DFS(row, col - 1);
        DFS(row, col + 1);
    }

    // // pure function version

    // let output = 0;
    // let copy = grid.map(row => [...row]);
    // // iterate over copy
    //     // if it's '1', increment output and DFS
    // // return output

    // for(let i = 0; i < copy.length; i++) {
    //     for(let j = 0; j < copy[0].length; j++) {
    //         if(copy[i][j] == '1') {
    //             output++;
    //             DFS(i, j);
    //         }
    //     }
    // }
    // return output;

    // function DFS(row, col) {
    //     // edge case checking
    //     // if value at row, col is '0', return
    //     // set value to '0' and DFS surrounding coords
    //     if(row < 0 || row >= copy.length || col < 0 || col >= copy[0].length) return;
    //     if(copy[row][col] == '0') return;
    //     copy[row][col] = '0';
    //     DFS(row - 1, col);
    //     DFS(row + 1, col);
    //     DFS(row, col - 1);
    //     DFS(row, col + 1);
    // }
};