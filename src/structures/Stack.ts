export default class Stack {
  items: Array<any> = [];

  push(element: any) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peak() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  getSize() {
    return this.items.length;
  }

  getItems() {
    return [...this.items];
  }
}
