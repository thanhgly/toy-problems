/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = new Array(temperatures.length).fill(0);
  const stack: [number, number][] = [];
  temperatures.forEach((number: number, index: number) => {
    while (stack.length && stack[stack.length - 1][0] < number) {
      const [pVal, pIdx] = stack.pop() || [];
      const period = index - pIdx!;
      result[pIdx!] = period || 0;
    }
    stack.push([number, index]);
  });
  return result;
}
// @lc code=end

/**
 * O: array of number
 * I: array of number
 * C: input length > 0, temperature is between 30 and 100
 * E: if there is no future day for which this is possiple, result should be 0
 *
 * pseudocode
 *
 * stack approach
 * declare a result = [] with length == input length
 * declare stack = []
 * for each number of input
 *   while stack.length != 0 and stack(last item) < current temp
 *     declare popped = stack.pop()
 *     calculate the difference = current index - popped index
 *     result[popped index] = calculated value
 *   stack.push([number, number index])
 * return result
 *
 */
