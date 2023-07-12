/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      break;
    }
  }
  return [left + 1, right + 1];
}
// @lc code=end

/**
 * O: array of number
 * I: array of number, number
 * C: there is exactly one solution, 1-indexed array, must use constant space O(1)
 * E:
 *
 * pseudocode
 * inputs: numbers, target
 * declare leftPointer = 0
 * declare rightPointer = numbers[-1]
 * while (leftPointer < rightPointer)
 *   if number at left + number at right > target
 *     leftPointer -= 1
 *   if number at right + number at left < target
 *     rightPointer += 1
 *   otherwise
 *     return [left + 1, right + 1]
 * return [0, 0]
 */
