// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut p = l1;
        let mut q = l2;
        let mut carry = 0;
        let mut dummy = Box::new(ListNode::new(0));
        let mut current = &mut dummy;

        while p.is_some() || q.is_some() || carry != 0 {
            let val1 = p.as_ref().map_or(0, |node| node.val);
            let val2 = q.as_ref().map_or(0, |node| node.val);
            let sum = val1 + val2 + carry;
            carry = sum / 10;

            current.next = Some(Box::new(ListNode::new(sum % 10)));
            current = current.next.as_mut().unwrap();

            p = p.and_then(|node| node.next);
            q = q.and_then(|node| node.next);
        }

        dummy.next
    }
}