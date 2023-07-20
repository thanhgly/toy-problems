/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let maxL = height[left];
  let maxR = height[right];
  while (left < right) {
    if (maxL < maxR) {
      result += maxL - height[left];
      left += 1;
      maxL = height[left] > maxL ? height[left] : maxL;
    } else {
      result += maxR - height[right];
      right -= 1;
      maxR = height[right] > maxR ? height[right] : maxR;
    }
  }
  return result;
}
// @lc code=end

/**
 * O: number
 * I: array of number
 * C: NA
 * E: NA
 *
 * Pseudocode
 * inputs (height)
 * declare result = 0
 * declare left = first index, maxL = height at first index
 * declare right = last index, maxR = height at last index
 * while left < right
 *   if maxL < maxR
 *     result += (maxL - height[left])
 *     left += 1
 *     if (height[left] > maxL) maxL = height[left]
 *   otherwise
 *     result += (maxR - height[right])
 *     right -= 1
 *     if (height[right] > maxR) maxR = height[right]
 * return result
 */
