/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let newHead = null;
  let curNode = head;
  while (curNode !== null) {
    let tail = newHead;
    newHead = new ListNode(curNode.val, tail);
    curNode = curNode.next;
  }
  return newHead;
};
// @lc code=end

/**
 * O: ListNode
 * I: ListNode
 * C: NA
 * E: return null for empty input,
 */

// Pseudocode
/**
 * Iteration version
 * declare newHead = null
 * declare curNode = head
 * while curNode != null
 *   let tail = newHead
 *   newHead = new ListNode(curNode.val, tail)
 *   curNode = curNode.next
 * return newHead
 */