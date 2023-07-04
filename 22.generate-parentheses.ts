/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const result: string[] = [];
  function backstrack(openCount: number, closedCount: number): void {
    if (openCount === closedCount && closedCount === n) {
      result.push(stack.join(''));
      return;
    }
    if (openCount < n) {
      stack.push('(');
      backstrack(openCount + 1, closedCount);
      stack.pop();
    }
    if (closedCount < openCount) {
      stack.push(')');
      backstrack(openCount, closedCount + 1);
      stack.pop();
    }
  }
  backstrack(0, 0);
  return result;
}
// @lc code=end

/**
 * O: array of strings
 * I: a number
 * C: input element consists of "(" and ")", result must be a list of well-formed parentheses
 * E: NA
 *
 * Pseudocode
 * declare a stack = []
 * declare a result = []
 * declere innerFunc that takes in a openCount and a closedCount
 *   if openCount == closedCount == input
 *     result.push(stack.join())
 *     return
 *   if openCount < input
 *     stack.push("(")
 *     innerFunc(openCount + 1, closeCount)
 *     stack.pop()
 *   if closeCount < openCount
 *     stack.push(")")
 *     innerFunc(openCount, closeCount + 1)
 *     stack.pop()
 * innerFunc(0, 0)
 * return result
 *
 */
