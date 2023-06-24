/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }
  let fast = head.next;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    if (fast === slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
}
// @lc code=end

// O: boolean
// I: ListNode
// C: NA (always verify with interviewer)
// E: list with length 0, 1 should return false

// pseudocode
// fast and slow pointer technique
// if head == null return false
// declare fast = head.next
// declare slow = head
// while fast != null
//   if fast == slow
//     return true
//   fast = fast.next.next
//   slow = slow.next
// return false
