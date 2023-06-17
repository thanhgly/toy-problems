/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {

  let result = '';
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i > -1 || j > -1 ) {
    let digitA = (i < 0) ? 0 : parseInt(a[i]);
    let digitB = (j < 0) ? 0 : parseInt(b[j]);
    let total = digitA + digitB + carry;
    let char = total % 2;
    result = char + result;
    carry = Math.floor(total / 2);
    i--;
    j--;
  }

  return carry ? carry + result : result;
};
// @lc code=end

/**
 * O: string
 * I: string a, string b
 * C: NA
 * E: inputs can have diffrent length
 *
 * Pseudocode
 * declare result = ''
 * declare carry = 0
 * declare i = last index of a
 * declare j = last index of b
 * iterate over the range of length in reverse order
 *   declare digitA = current num at string a convert to int, = 0 if undefined
 *   declare digitB = current num at string b convert to int, = 0 if undefined
 *   declare total = digitA + digitB + carry
 *   declare char = total % 2
 *   result = char + result
 *   carry = total / 2, round down
 * if carry return carry + result
 * otherwise return result
 */