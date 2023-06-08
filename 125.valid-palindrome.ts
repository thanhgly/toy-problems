/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const isAlphanumnericRegex = /[0-9a-z]/i;
  let startIdx = 0;
  let endIdx = s.length - 1;
  while (startIdx < endIdx) {
    if (!isAlphanumnericRegex.test(s[startIdx])) {
      startIdx++;
      continue;
    }
    if (!isAlphanumnericRegex.test(s[endIdx])) {
      endIdx--;
      continue;
    }

    if (s[startIdx].toLowerCase() !== s[endIdx].toLowerCase()) {
      return false;
    }
    startIdx++;
    endIdx--;
  }
  return true;
};
// @lc code=end

// O: boolean
// I: string
// C: no empty input
// E: input includes non-alphanumberic character, odd or even inpur length

// pseudocode
// declare a regex for alphanumeric character
// declare a startIdx pointer
// declare a tail pointer
// while startIdx > tail
//   if startIdx is not alphanumeric
//     startIdx move to next el (++)
//   if tail is not alphanumeric
//     tail move to previous el (--)
//   if char at startIdx != chat at tail
//     return false
// return true