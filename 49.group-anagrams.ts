/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start

// Count char approach (Time: O(n*m) Space: O(n))
function groupAnagrams(strs: string[]): string[][] {
  const result: Map<string, string[]> = new Map();
  strs.forEach((str) => {
    // O(n) time
    const count = new Array(26).fill(0); // a-z O(26) time
    for (let c of str) {
      // O(m) time
      count[c.charCodeAt(0) - 97] += 1;
    }
    const key = count.toString(); // O(26)
    if (result.has(key)) {
      result.get(key)?.push(str);
    } else {
      result.set(key, [str]);
    }
  });
  return [...result.values()]; // O(n)
}

// Sorting Approach (Time: O(m.n.logn) Space: O(m))
// countChar takes a string and sort it
// function groupBy(str: string): string {
//   const word = str.split('').sort().join();
//   return word;
// };

// function groupAnagrams(strs: string[]): string[][] {
//   const anagramMap: Map<string, string[]> = new Map;
//   for (let str of strs) {
//     const key = groupBy(str);

//     if (anagramMap.has(key)) {
//       anagramMap.get(key)!.push(str);
//     } else {
//       anagramMap.set(key, [str]);
//     }
//   }

//   return Array.from(anagramMap.values());
// };
// @lc code=end

/**
 * O: array of array of string
 * I: array of string
 * C: NA
 * E: NA
 *
 * Pseudocode
 * declare anagramMap = {};
 * iterate over the input, for each item
 *   declare key = sortWord(item) // should be a detail of each letter in the item
 *   if key exists in anagramMap
 *     add item to value of key in anagramMap
 *   otherwise
 *     create key in anagramMap with a list as value
 *     add item to list of key in anagramMap
 * return the values of anagramMap as an array
 */
