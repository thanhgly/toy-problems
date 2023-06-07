/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let maxP: number = 0;
  let buy: number = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let sell: number = prices[i];
    if (buy > prices[i]) {
      buy = prices[i];
    }

    let profit = sell - buy;

    if (profit > maxP) {
      maxP = profit;
    }
  }
  return maxP;
};
// @lc code=end

// O: number
// I: array of numbers
// C: input length > 0, input array value positive integer, sell must be in the CSSFontFeatureValuesRule
// E: return 0 if no profit found

// pseudocode
// initialize maxProfit = 0;
// initialize buy = first day price
// start iterate over prices, starting from the second element
//   declare sell = current price
//   if buy < sell
//     buy = sell
//   profit = sell - buy
//   if (profit > maxProfit)
//     reassign maxProfit = profit
// return maxProfit