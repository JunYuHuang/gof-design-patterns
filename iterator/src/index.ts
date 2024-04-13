/* The iterator interface */
interface MyIterator<T> {
  next(): T;
  atEnd: () => boolean;
}

/* The iterable collection interface */
interface MyIterableCollection<T> {
  createIterator: () => MyIterator<T>;
}

/* The item that composes the concrete collection */
class Node {
  value: number;
  next: Node | null;

  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }
}

/* The concrete iterator */
class LinkedListIterator implements MyIterator<Node | null> {
  linkedList: LinkedList;
  current: Node | null;

  constructor(linkedList: LinkedList) {
    this.linkedList = linkedList;
    this.current = linkedList.dummy;
  }

  next() {
    if (!this.current) return null;
    const res = this.current.next;
    this.current = this.current.next;
    return res;
  }

  atEnd() {
    if (!this.current) return true;
    if (!this.current.next) return true;
    return false;
  }
}

/* The concrete collection */
class LinkedList implements MyIterableCollection<Node | null> {
  // `dummy` points to the real head of the list
  dummy: Node;

  constructor(values: number[]) {
    this.dummy = new Node(-999);

    let current = this.dummy;
    for (const value of values) {
      const newNode = new Node(value);
      current.next = newNode;
      current = current.next;
    }
  }

  createIterator() {
    return new LinkedListIterator(this);
  }
}

export {
  LinkedList,
  Node
}
