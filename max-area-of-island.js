/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // pure function version
    // let max = 0;
    // let copy = grid.map(row => [...row]);
    // // iterate over copy, DFSing each island found and updating max
    // for(let i = 0; i < copy.length; i++) {
    //     for(let j = 0; j < copy[0].length; j++) {
    //         if(copy[i][j] == 1) max = Math.max(max, DFS(i, j));
    //     }
    // }
    // return max;

    // function DFS(row, col) {
    //     // return 0 for edge cases and water
    //     // set coord to 0 and DFS neighbors
    //     // return 1 + sum of neighbors
    //     if(row < 0 || row >= copy.length || col < 0 || col >= copy[0].length) return 0;
    //     if(copy[row][col] == 0) return 0;
    //     copy[row][col] = 0;
    //     return 1 + DFS(row - 1, col) + DFS(row + 1, col) + DFS(row, col - 1) + DFS(row, col + 1);
    // }

    let max = 0;
    // iterate over grid, DFSing each island found and updating max
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1) max = Math.max(max, DFS(i, j));
        }
    }
    return max;

    function DFS(row, col) {
        // return 0 for edge cases and water
        // set coord to 0 and DFS neighbors
        // return 1 + sum of neighbors
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return 0;
        if(grid[row][col] == 0) return 0;
        grid[row][col] = 0;
        return 1 + DFS(row - 1, col) + DFS(row + 1, col) + DFS(row, col - 1) + DFS(row, col + 1);
    }
};