/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  const stack: [number, number][] = [];
  let largestArea = 0;
  heights.forEach((h: number, i: number): void => {
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > h) {
      const [idx, height] = stack.pop() || [];
      largestArea = Math.max(largestArea, height! * (i - idx!));
      start = idx || 0;
    }
    stack.push([start, h]);
  });

  for (const [idx, height] of stack) {
    largestArea = Math.max(largestArea, height * (heights.length - idx));
  }

  return largestArea;
}
// @lc code=end

/**
 * O: number
 * I: array of number
 * C: no empty input, input[i] can be 0
 * E: if input length is 1, return area of the only bar
 *
 * pseudocode
 * inputs: heights
 * declare stack = []
 * declare largestArea = 0
 * for each currentHeight, currentIdx of heights
 *   declare start = currentIdx
 *   while stack != empty and stack[-1][height] > height
 *     declare [ idx, height] = stack.pop()
 *     largestArea = max(largestArea, height * (currentIdx - idx))
 *     start = idx
 *   stack.push([start, currentHeight])
 * for each idx, height of stack
 *   largestArea = max(largestArea, height * (heights.length - idx))
 * return largestArea
 */
