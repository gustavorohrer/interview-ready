// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295
// Output: 9 -> 1 -> 2, That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  const l1 = new LinkedList<number>(list1)
  const l2 = new LinkedList<number>(list2)

  if (!list1 && !list2) return

  const a1: Array<number> = []
  l1.visit((node) => {
    a1.push(node.value)
  })

  const a2: Array<number> = []
  l2.visit((node) => {
    a2.push(node.value)
  })

  const newNumber = Number(a1.join("")) + Number(a2.join(""))

  const ret = new LinkedList<number>()
  newNumber
      .toString()
      .split("")
      .forEach(d => ret.push(Number(d)))

  return ret.head
}
