/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const result: number[] = [];

  const freq = new Map<number, number>();
  nums.forEach((num) => {
    freq.set(num, (freq.get(num) || 0) + 1);
  });

  const freqTuple: number[][] = Array.from(freq).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(freqTuple[i][0]);
  }
  return result;
}
// @lc code=end

/**
 * O: array of number
 * I: array of number, a number
 * C: Time complexity must be better than O(nlogn)
 * E: NA
 *
 * Pseudocode
 * declare counts = count the number frequency and store in an object
 * declare result = []
 * declare countsArr = convert counts to tuple [key, value]
 * sort countsArr by its frequency
 * iterate over countsArr, for k times
 *   result.push(freqency of current tuple)
 * return result
 */
