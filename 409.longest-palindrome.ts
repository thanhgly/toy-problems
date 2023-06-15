/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
  const counts: {[k:string]: number} = {};
  let longestPalindromeLength = 0;
  let hasOdd = false;

  for (let c of s) {
    counts[c] = counts[c] ? counts[c] + 1 : 1;
  }

  for (let c in counts) {
    if (counts[c] % 2 === 0) {
      longestPalindromeLength += counts[c];
    } else {
      hasOdd = true;
      longestPalindromeLength += (counts[c] - 1);
    }
  }

  return hasOdd ? longestPalindromeLength + 1 : longestPalindromeLength;
};
// @lc code=end

// O: number
// I: string
// C: case sensitive, input length > 0
// E: NA

// pseudocode
// declare counts = {}
// declare longestPalindromeLength = 0;
// declare hasOdd = false
// iterate over s, for each char
//   if char exist
//     add one char count
//   otherwise
//     create char count and add one
// iterate over the count, for each char count
//   if char count is even
//     longestPalindromeLength += char count
//   otherwise
//     if char count >= 3
//       longestPalindromeLength += (char count - 1)
//     hasOdd = true
// if hasOdd
//   return longestPalindromeLength + 1
// return longestPalindromeLength
