class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        // BFS solution
        // iterate through grid and find treasure chests
        // BFS from each chest simultaneously

        const queue = [];
        const visited = new Set();
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] == 0) {
                    queue.push([i, j, 0]);
                    visited.add([i, j].toString())
                }
            }
        }

        function addRoom(i, j, dist) {
            if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
            if(visited.has([i, j].toString())) return;
            if(grid[i][j] == -1) return;
            visited.add([i, j].toString());
            queue.push([i, j, dist]);
            return;
        }

        while(queue.length > 0) {
            let len = queue.length;
            for(let coord = 0; coord < len; coord++) {
                let [i, j, dist] = queue.shift();
                grid[i][j] = dist;
                addRoom(i - 1, j, dist + 1);
                addRoom(i + 1, j, dist + 1);
                addRoom(i, j - 1, dist + 1);
                addRoom(i, j + 1, dist + 1);
            }
        }

        // // DFS solution
        // // iterate through grid and find treasure chests
        // // for each chest, DFS and update each reachable land cell with min(itself, distance from chest)
        // const chests = [];
        // for(let i = 0; i < grid.length; i++) {
        //     for(let j = 0; j < grid[0].length; j++) {
        //         if(grid[i][j] == 0) chests.push([i, j]);
        //     }
        // }

        // for(let c of chests) {
        //     DFS(c[0] - 1, c[1], 1);
        //     DFS(c[0] + 1, c[1], 1);
        //     DFS(c[0], c[1] - 1, 1);
        //     DFS(c[0], c[1] + 1, 1);
        // }

        // function DFS(i, j, val) {
        //     // edge cases
        //     if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
        //     if(grid[i][j] <= val) return;
        //     grid[i][j] = val;
        //     DFS(i - 1, j, val + 1);
        //     DFS(i + 1, j, val + 1);
        //     DFS(i, j - 1, val + 1);
        //     DFS(i, j + 1, val + 1);
        // }
    }
}
