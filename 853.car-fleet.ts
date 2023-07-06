/*
 * @lc app=leetcode id=853 lang=typescript
 *
 * [853] Car Fleet
 */

// @lc code=start
function carFleet(target: number, position: number[], speed: number[]): number {
  const stack: number[] = [];
  const cars = position
    .map((num: number, idx: number): [number, number] => {
      return [num, speed[idx]];
    })
    .sort((a, b) => b[0] - a[0])
    .forEach(car => {
      const timeToDes = (target - car[0]) / car[1];
      stack.push(timeToDes);
      if (
        stack.length > 1 &&
        stack[stack.length - 1] <= stack[stack.length - 2]
      ) {
        stack.pop();
      }
    });
  return stack.length;
}
// @lc code=end

/**
 * O: number
 * I: number, array of number, array of number
 * C: a car can never pass a car in front, distance between the cars should be ignored, faster car must slow down to match the speed of a slow car
 * E: one car should be consider a fleet
 *
 * pseudocode
 * inputs: target, position, speed
 * declare stack = [];
 * declare cars = merge position and speed, cars is a list of tuples ([pos, speed])
 * sort cars by position in reverve order
 * traverse through cars
 *   declare timeToDes = (target - position) / speed
 *   stack.push(timeTodDes)
 *   if (stack.length > 1 & stack[last] > stack[second to last])
 *     stack.pop()
 * return stack.length
 */
