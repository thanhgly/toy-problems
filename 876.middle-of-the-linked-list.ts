/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
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

function middleNode(head: ListNode | null): ListNode | null {
  let counter = 0;
  let mid = head;
  let cur = head;
  while (cur !== null) {
    mid = counter % 2 !== 0 ? mid.next : mid;
    counter++;
    cur = cur.next;
  }
  return mid;
}

// function middleNode(head: ListNode | null): ListNode | null {
//   const nodes: ListNode[] = [];
//   let cur = head;
//   while (cur !== null) {
//     nodes.push(cur);
//     cur = cur.next;
//   }

//   const isEven = nodes.length % 2 === 0;
//   return isEven ? nodes[(nodes.length / 2)] : nodes[Math.floor(nodes.length / 2)];
// };
// @lc code=end

/**
 * O: ListNode
 * I: ListNode
 * C: if even linked list return the second middle node
 * E: if given one node linkedlist return head, if given 2 nodes linkedlist return the second nodes.
 *
 * Pseudocode
 *
 * Brute Force
 * declare nodes = []
 * declare cur = head
 * while cur != null
 *   nodes.push(cur)
 *   cur = cur.next
 * declare isEven = nodes.length % 2 === 0
 * declare middleIdx = isEven ? (nodes.length / 2) + 1 : (nodes.length / 2) round down
 * return nodes[middleIdx]
 *
 * 2 Pointers
 * counter = 0
 * mid = head
 * cur = head
 * while cur != null
 *   counter++
 *   mid = counter odd ? mid.next : mid
 *   cur = cur.next
 * return mid
 */
