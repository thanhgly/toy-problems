/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
// Brute Force (recursive)
// function climbStairs(n: number): number {
//   let ways = 0;
//   function step(currentStep: number): void {
//     if (currentStep === n) {
//       ways++;
//       return;
//     }
//     if (currentStep > n) {
//       return;
//     }
//     step(currentStep + 1);
//     step(currentStep + 2);
//   }
//   step(0);
//   return ways;
// };

// Fibonacci Sequence
function climbStairs(n: number): number {
  let one = 1;
  let two = 1;

  for (let i = n - 2; i >= 0; i--) {
    let temp = one;
    one = one + two;
    two = temp;
  }

  return one;
}
// @lc code=end

// O: number
// I: number
// C: only 1 or 2 steps each time, n > 0
// E: n/a

// pseudocode
// declare ways = 0
// declare step(currentStair)
//   if (currentStair === n)
//     ways += 1
//     return
//   else if currentStair > n
//     return
//   step(currentStep + 1)
//   step(currentStep + 2)
// step(0)
// return ways
