function productExceptSelfTS(nums: number[]): number[] {
    let zeroCount: number = 0;
    const product: number = nums.reduce((accum: number, el: number) => {
        if(el == 0) {
            zeroCount++;
            return accum;
        }
        return accum * el;
    }, 1);
    if(zeroCount > 1) return new Array(nums.length).fill(0);
    let output: number[] = [];
    if(zeroCount == 1) {
        for(let el of nums) {
            if(el == 0) output.push(product);
            else output.push(0);
        }
    }
    else {
        for(let el of nums) {
            output.push(product / el);
        }
    }
    return output;
};