/*
 * @lc app=leetcode id=235 lang=typescript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

import { count } from "console"

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let current = root;
  while (current !== null) {
    if (current.val === p.val || current.val === q.val) {
      return current;
    }
    if (p.val > current.val) {
      if (q.val < current.val) {
        return current;
      }
      current = current.right;
      continue;
    }
    if (p.val < current.val) {
      if (q.val > current.val) {
        return current;
      }
      current = current.left;
      continue;
    }
  }
  return root;
};
// @lc code=end

// O: TreeNode
// I: 3 TreeNodes
// C: Node can be a descendant of itself
// E: NA

// Pseudocode
// declare crntNode = root
// while crntNode != null
//   if crntNode value == p value or crntNode value == q value
//     return root
//   if p value > crntNode value
//     if q value < crmtNode value
//       return crntNode
//     crntNode = crntNode.right
//     continue
//   if p value < crntNode value
//     if q > crntNode value
//       return crntNode
//     crntNode = crntNode.left
//     continue
// return root
