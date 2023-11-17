/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // create var to track max profit, current low price
    let max = 0;
    let currentLow = Infinity;
    // iterate through prices, updating max and currentLow when needed
    prices.forEach(el => {
        max = Math.max(max, el - currentLow);
        currentLow = Math.min(currentLow, el);
    });
    return max;
};