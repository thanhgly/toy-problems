/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(node) {
    if (node === null) {
      return -1;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);
    let diameter = left + right + 2;
    let height = 1 + Math.max(left, right);
    if (diameter > result) {
      result = diameter;
    }
    return height;
  }
  dfs(root);
  return result;
}
// @lc code=end
