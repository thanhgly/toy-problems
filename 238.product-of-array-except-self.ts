/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  let prefix = 1, postfix = 1, index = nums.length - 1;
  return nums
    .map((num: number, idx: number): number => {
      let temp = prefix;
      prefix *= num;
      return temp;
    })
    .reverse()
    .map((num: number, idx: number): number => {
      let temp = postfix * num;
      postfix *= nums[index];
      index--;
      return temp;
    })
    .reverse();
};
// @lc code=end

// input    [ 1| 2| 3| 4]
// res 1    [ 1| 1| 2| 6]
// res 2    [24|12| 8| 6] final result