// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

import {o} from "vitest/dist/chunks/reporters.C_zwCd4j";

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head
    this.tail = head
  }

  push(value: T) {
    if (!this.tail) {
      this.head = {value}
      this.tail = this.head
      return
    }
    this.tail.next = {value}
    this.tail = this.tail.next
  }

  filter(fn: (node: Node<T>, index: number) => boolean): LinkedList<T> {
    let p = this.head
    const list = new LinkedList<T>()
    let index = 0
    while (p) {
      if (fn(p, index)) {
        list.push(p.value)
      }
      index++
      p = p.next
    }
    return list
  }

  visit(fn: (node: Node<T>, index: number) => boolean | void): LinkedList<T> {
    let p = this.head
    let index = 0
    while (p) {
      if(fn(p, index)) break
      p = p.next
      index++
    }
    return this
  }

  remove() {}

  merge(list: LinkedList<T>): LinkedList<T> {
    if(!this.tail) return list
    this.tail.next = list.head
    this.tail = list.head
    return this
  }

  print() {
    let output = ''
    this.visit((node, index) => {
      output += node.value
      if (node.next) {
        output += '->'
      }
    })
  }

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length(): number {
    let length = 0
    this.visit(() => {
      length++
    })
    return length
  };
}

const list = new LinkedList();
