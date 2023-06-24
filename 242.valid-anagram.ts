/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let counts = {};

  for (let char of s) {
    if (counts[char] === undefined) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  }

  for (let char of t) {
    if (counts[char] === undefined) {
      return false;
    } else {
      if (counts[char] === 1) {
        delete counts[char];
      } else {
        counts[char]--;
      }
    }
  }
  return Object.keys(counts).length === 0;
}
// @lc code=end

// O: boolean
// I: 2 strings
// C: NA
// E: NA

// pseudocode
// if (string1 length != string2 length) return fasle
// declare counts
// iterate over string1
//   if char exists in counts
//     add one
//   otherwise
//     iniialize char count = 1
// iterate over string2
//   if char exists in counts
//     if char count is one
//       delete char count
//     substract one
//   otherwise
//     return false
// return counts size === 0
