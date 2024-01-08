/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentLow = Infinity;
    let max = 0;
    prices.map(el => {
        if(el > currentLow) max += el - currentLow;
        currentLow = el;
    })
    return max;
};