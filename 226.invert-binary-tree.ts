/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root;
  }

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  if (root.left !== null) {
    invertTree(root.left);
  }
  if (root.right !== null) {
    invertTree(root.right);
  }
  return root;
}
// @lc code=end

// O: Binary Tree
// I: Binary Tree
// C: NA
// E: empty input should return empty TreeNode

// pseudocode

// if root is null
//   return root
// define tmp = root.left
// root.left = root.right
// root.right = tmp
// if (root.left !== null) call func on root.left
// if (root.right !== null) call func on root.right
// return root
