/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const magazineLetterCounts: { [k: string]: number } = {};

  for (let char of magazine) {
    if (magazineLetterCounts[char] === undefined) {
      magazineLetterCounts[char] = 1;
    } else {
      magazineLetterCounts[char]++;
    }
  }

  for (let char of ransomNote) {
    if (magazineLetterCounts[char] === undefined) {
      return false;
    } else {
      if (magazineLetterCounts[char] === 1) {
        delete magazineLetterCounts[char];
      } else {
        magazineLetterCounts[char]--;
      }
    }
  }

  return true;
}
// @lc code=end

// O: boolean
// I: 2 strings
// C: each letter in the magazine can only be used once in ransom note
// E: magazine length < ransomNote length should return false

// pseudocode
// declare magazineLetterCounts = {}
// iterate over the magazine, for each letter
//   if exists in megazineLetterCounts
//     add one
//   otherwise
//     create key and add one
// iterate over the ransomNote, for each letter
//   if exists in magazineLetterCounts
//     if count = 1
//       delete key
//     otherwise
//       subtract one from count
//   otherwise
//     return false
// return true
