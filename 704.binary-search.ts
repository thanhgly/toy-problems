/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let curEl = nums[mid];
    if (target > curEl) {
      left = mid + 1;
    } else if (target < curEl) {
      right = mid;
    } else {
      return mid;
    }
  }
  return nums[left] === target ? left : -1;
};
// @lc code=end

// O: number
// I: array, number
// C: run time must be O(logn)
// E: NA

// Strategy
// [-1, 0, 3, 5, 9, 12] | target = 9
// [ 0, 1, 2, 3, 4, 5 ]
//   L              R => (L + R) / 2 = (0 + 5) / 2 = 2.5 => round down => 2 = mid => cur = 3
// 3 < 9 = cur < target => go right
// L = mid  + 1 = 2 + 1 = 3
// [-1, 0, 3, 5, 9, 12]
// [ 0, 1, 2, 3, 4, 5 ]
//         L        R  => (3 + 5) / 2 = 4 => mid = 4 => cur = 9
// 9 = 9 => answer is 4

// Pseudocode
// initialize left = first index (0)
// initialize right = last index (nums.length - 1)
// while left < right
//   define mid = (left + right) / 2; round down
//   define curEl = nums[mid];
//   if target > curEl
//     left = mid + 1
//   else if target < curEl
//     right = mid - 1
//   otherwise
//     return mid;
// return -1
