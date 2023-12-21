function subsetsTS(nums: number[]): number[][] {
    const output: number[][] = [[]];
    for(const num of nums) {
        let copy: number[][] = [...output];
        for(const curr of copy) {
            output.push([...curr, num]);
        }
    }
    return output;
};