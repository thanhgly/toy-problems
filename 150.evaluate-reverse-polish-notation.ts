/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start

function doTheMath([first, second, operator]: [
  number,
  number,
  string,
]): number {
  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      return Math.trunc(first / second);
  }
}

function evalRPN(tokens: string[]): number {
  const validOperators = new Set(['+', '-', '*', '/']);
  const stack: number[] = [];
  for (const token of tokens) {
    if (validOperators.has(token)) {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(doTheMath([first!, second!, token]));
      continue;
    }
    stack.push(parseInt(token));
  }
  return stack[0];
}
// @lc code=end

/**
 * O: number
 * I: array of string
 * C: The division between two integers always truncates toward zero
 * E: length of input is 1 and the only element is a number, invalid inputs
 *
 * pseudocode
 * declare validOperator = [...operators]
 * declare stack = []
 * iterate over inputs
 *   if item in validOperator
 *     declare second = stack.pop()
 *     declare first = stack.pop()
 *     stack.push(doTheMath(first, second, item))
 *     end iteration
 *   stack.push(item)
 * return stack[0]
 */
