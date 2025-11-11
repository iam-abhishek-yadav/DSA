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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry: number = 0;
    const dummyHead: ListNode = new ListNode(0);
    let current: ListNode = dummyHead;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1: number = l1 !== null ? l1.val : 0;
        const val2: number = l2 !== null ? l2.val : 0;

        const sum: number = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummyHead.next;
};