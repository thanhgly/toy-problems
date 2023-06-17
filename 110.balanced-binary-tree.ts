/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode): [boolean, number] => {
    if (node === null) {
      return [true, -1];
    }

    const left = dfs(node.left);
    const right = dfs(node.right);
    const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])];
  }
  return dfs(root)[0];
};
// @lc code=end

// O: boolean
// I: TreeNode
// C: NA
// E: root is null -> tree is balanced

// pseodocode
// declare dfs (node)
//   if node == null
//     return tuble [true, 0]
//   declare left = dfs(node.left)
//   declare right = dfs(node.right)
//   declare balanced = left[0] && right[0] && abs(left[1] - right[1]) <= 1
//   return [balanced, 1 + max(left[1], right[1])]
// return dfs(root)[0]

