/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const setOfNums = new Set(nums); // O(n) time and space
  let result = 0;
  for (let num of nums) {
    // O(n) time
    if (!setOfNums.has(num - 1)) {
      let sqLength = 0;
      while (setOfNums.has(num + sqLength)) {
        sqLength++;
      }
      result = Math.max(sqLength, result);
    }
  }
  return result;
}
// @lc code=end

/**
 * O: number
 * I: array of numbers
 * C: O(n) time
 * E: dublicate numbers are not count as consecutive sequence, empty input should return 0
 *
 * pseudocode
 * make a set from input
 * declare result = 0
 * iterate over input, for each number
 *   declare count = 0
 *   if number - 1 doesnt exists in set
 *     declare current = number
 *     declare count = 0
 *     while (current exist in set)
 *       count += 1
 *       current += 1
 *   if count > result
 *     result = count
 * return result
 */
