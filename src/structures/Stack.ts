export default class Stack<T> {
  private items: Array<T> = [];

  push(element: T) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  clear() {
    this.items = [];
  }

  getPeek() {
    return this.items[this.items.length - 1];
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
}
