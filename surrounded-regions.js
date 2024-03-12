/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // iterate over board
        // DFS each coord looking for 'O'
        // if true, flip all to 'X'
    // region will use encoded coords as keys
    // [x, y] => 200 * x + y
    let region = new Set();
    for(let i = 1; i < board.length - 1; i++) {
        for(let j = 1; j < board[0].length - 1; j++) {
            if(board[i][j] == 'O') {
                region = new Set();
                if(isSurrounded(i, j)) {
                    for(const coords of region) {
                        board[Math.floor(coords / 200)][coords % 200] = 'X';
                    }
                }
            } 
        }
    }

    function isSurrounded(i, j) {
        if(board[i][j] == 'X') return true;
        if(i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1) return false;
        if(region.has(i * 200 + j)) return true;
        region.add(i * 200 + j);
        return isSurrounded(i - 1, j) && isSurrounded(i + 1, j) &&
            isSurrounded(i, j - 1) && isSurrounded(i, j + 1);
    }
};