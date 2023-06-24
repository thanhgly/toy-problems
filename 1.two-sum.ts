/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let visited: object = {};
  for (let i: number = 0; i < nums.length; i++) {
    const disiredNum = target - nums[i];
    if (visited[disiredNum] !== undefined) {
      return [visited[disiredNum], i];
    }
    visited[nums[i]] = i;
  }
  return [];
}
// @lc code=end
