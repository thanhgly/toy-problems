/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

import { boolean } from "yargs";

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const visited: { [k: string]: string } = {};
  for (let num of nums) {
    if (visited[num]) {
      return true;
    }
    visited[num] = "exist";
  }
  return false;
}
// @lc code=end

/**
 * O: boolean
 * I: array of number
 * C: NA
 * E: input with a length of one should return true right away
 *
 * Pseudocode
 * Using Hash Map
 * declare visited = {}
 * iterate over input, for each item
 *   if item exist in visisted
 *     return true
 *  return false
 */
