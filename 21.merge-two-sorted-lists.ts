/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const mergedList: ListNode = new ListNode();
  let tail = mergedList;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  }
  if (list2) {
    tail.next = list2;
  }

  return mergedList.next;
};
// @lc code=end

// O: Linked List
// I: 2 Linked Lists
// C: inputs are sorted, list should be made by splicing together the nodes of the first two lists
// E: empty list inputs

// pseudocode
// declare mergedList = ListNode
// declare tail = mergeList
// while (list1 not null && list2 not null)
//   if (val of list1 > val of list2)
//     assign list2 to tail.next
//     list2 = next node of list2
//   otherwise
//     assign list1 to tail.next
//     list1 = next node of list1
//   tail = next node of tail
// if (list1 not null)
//   next node of tail = list1
// if (list2 not null)
//   next node of tail = list2
// return the next node of mergedList