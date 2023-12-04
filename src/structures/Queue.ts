export default class Queue {
  items: Array<any> = [];

  enqueue(item: any) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  getFirst() {
    return this.items[0];
  }

  getIsEmpty() {
    return this.items.length === 0;
  }

  getSize() {
    return this.items.length;
  }
}
