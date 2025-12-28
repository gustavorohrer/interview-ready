// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  const result = new LinkedList<number>()
  let p1 = list1
  let p2 = list2
  let carry = 0

  while (p1 || p2 || carry) {
    const val1 = p1?.value ?? 0
    const val2 = p2?.value ?? 0

    const sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    const digit = sum % 10

    result.push(digit)

    p1 = p1?.next
    p2 = p2?.next
  }

  return  result.head
}
