/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    if (area > maxArea) maxArea = area;
    if (height[l] <= height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return maxArea;
}
// @lc code=end

/**
 * O: number
 * I: array of number
 * C: may not slant the container
 * E: NA
 *
 * Pseudocode
 * inputs (height)
 * declare maxArea = 0
 * decalre l = first index of height
 * declare r = last index of height
 * while l < r
 *   declare area = (r - l) * min of height[l] and height[r]
 *   if (area > maxArea) -> maxArea = area
 *   if (height[l] <= height[r])
 *     l += 1
 *   else
 *     r -= 1
 * return maxArea
 */
