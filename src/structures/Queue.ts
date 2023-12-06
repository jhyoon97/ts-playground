export default class Queue<T> {
  items: Array<T> = [];

  enqueue(item: T) {
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

  getItems() {
    return [...this.items];
  }

  clear() {
    this.items = [];
  }
}
