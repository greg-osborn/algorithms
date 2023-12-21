function spiralOrderTS(matrix: number[][]): number[] {
    const output: number[] = [];
    let left: number = 0, top: number = 0;
    let right: number = matrix[0].length - 1;
    let bottom: number = matrix.length - 1;
    while(output.length < matrix.length * matrix[0].length) {
        // left to right
        let currCol: number = left;
        let currRow: number = top;
        while(currCol <= right) {
            output.push(matrix[currRow][currCol]);
            currCol++;
        }
        top++;
        // top to bottom
        currCol--;
        currRow++;
        while(currRow <= bottom) {
            output.push(matrix[currRow][currCol]);
            currRow++;
        }
        right--;
        //right to left
        currRow--;
        currCol--;
        if(matrix.length % 2 == 1) {
            while(currCol >= left && currRow > top) {
                output.push(matrix[currRow][currCol]);
                currCol--;
            }
        }
        else {
            while(currCol >= left) {
                output.push(matrix[currRow][currCol]);
                currCol--;
            }
        }
        bottom--;
        //bottom to top
        currRow--;
        currCol++;
        if(matrix[0].length % 2 == 1) {
            while(currRow >= top && currCol < right) {
                output.push(matrix[currRow][currCol]);
                currRow--;
            }
        }
        else {
            while(currRow >= top) {
                output.push(matrix[currRow][currCol]);
                currRow--;
            }
        }
        left++;
    }
    return output;
};