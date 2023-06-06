/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const bracketMapping: object = {
  ')': '(',
  ']': '[',
  '}': '{'
};

function isValid(s: string): boolean {
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (bracketMapping[s[i]]) {
      if (!stack.length) {
        return false;
      }
      if (stack[stack.length - 1] !== bracketMapping[s[i]]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
// @lc code=end

