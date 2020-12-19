class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if(!this.first) { this.first = node; }
    if(this.last) { this.last.next = node; }
    this.last = node;

  }

  dequeue() {
    if(!this.first) { return; }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last) { this.last = null; }
    return node.data;
  }

  show() {
    if(!this.first) { return; }
    return this.first.data;
  }

  all() {
    const all = [];
    let currNode = this.first;
    while(currNode) {
      all.push(currNode.data);
      currNode = currNode.next;
    }
    return all;
  }
}

module.exports = Queue;
