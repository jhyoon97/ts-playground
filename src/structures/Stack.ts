export default class Stack {
  items: Array<any> = [];

  push(element: any) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  clear() {
    this.items = [];
  }

  getPeak() {
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
