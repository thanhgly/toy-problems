/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = sortedNums.length - 1;
    while (l < r) {
      const sum = sortedNums[i] + sortedNums[l] + sortedNums[r];
      if (sum > 0) {
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        result.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
        r -= 1;
        l += 1;
        while (sortedNums[l] === sortedNums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }
  return result;
}
// @lc code=end

/**
 * O: array of array of number
 * I: array of number
 * C: no dublicates result
 * E: if no solution, return empty array
 *
 * Pseudocode
 * inputs: nums
 * declare result = []
 * declare sortedNums = sort nums in no-decreasing order
 * for each num of nums (access v:value and i:index)
 *   if value in positive
 *     skip
 *   if index > 0 and value == previous value
 *     skip iteration
 *   declare l = next index
 *   declare r = last index
 *   while l < r
 *     declare sum = v + nums[l] + nums[r]
 *     if sum > 0
 *       r -= 1
 *     else if sum < 0
 *       l += 1
 *     otherwise
 *       result.push([v, nums[l], nums[r]])
 *       r -= 1
 *       l += 1
 *       while nums[l] == nums[l - 1] and l < r
 *         l += 1
 *  return result
 */
