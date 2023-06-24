// Hash Map approach
// interface countsType {[k:number]: number};
// function majorityElement(nums: number[]): number {
//   let [res, max] = [0, 0];
//   const counts: countsType= nums.reduce((counts, num): countsType => {
//     counts[num] = counts[num] + 1 || 1;
//     if (counts[num] > max) {
//       max = counts[num];
//       res = num;
//     }
//     return counts;
//   }, {})

//   return res;
// };

// Boyer-Moore algo
function majorityElement(nums: number[]): number {
  let result = nums[0];
  let count = 0;
  for (let num of nums) {
    if (num === result) {
      count++;
    } else {
      if (count === 0) {
        result = num;
        count++;
      } else {
        count--;
      }
    }
  }
  return result;
}

/**
 * O: number
 * I: number array
 * C: majority element always exists, majority element appear at least half of the time
 * E: majority could be every element
 */

/**
 * Pseudocode
 *
 * HashMap Solution (O(n) Time and O(n) space)
 * declare counts = {}
 * iterate over nums, for each num
 *   if num exist in counts
 *     add one count to num
 *   otherwise
 *     declare counts[num] = 1
 * return the maximum value of counts
 *
 * Boyer-Moore algo
 * declare res = nums[0]
 * declare count = 0
 * iterate over nums, for each num
 *   if num == res
 *     count += 1
 *   otherwise
 *     if count == 0
 *       res = num
 *       count += 1
 *     otherwise
 *       count -= 1
 * return res
 */
