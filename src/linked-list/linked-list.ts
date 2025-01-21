class ListNode {
  private data: any;
  next: ListNode | null;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  private head: ListNode | null;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data: any) {
    let node = new ListNode(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

let nodeOne: ListNode = new ListNode(5);
let nodeTwo: ListNode = new ListNode(6);

nodeOne.next = nodeTwo;

let list: LinkedList = new LinkedList();
list.add(5);
list.add(5);
list.add(5);
list.add(5);
list.add(5);

console.log(list);
