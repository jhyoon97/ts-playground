class Element<T> {
  element: T;

  priority: number;

  constructor(element: T, priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

export default class PriorityQueue<T> {
  private items: Array<Element<T>> = [];

  enqueue(data: T, priority: number) {
    const newItem = new Element(data, priority);

    if (this.items.length === 0) {
      this.items.push(newItem);
    } else {
      for (let i = 0; i < this.items.length; i += 1) {
        if (priority < this.items[i].priority) {
          this.items.splice(i, 0, newItem);

          return;
        }
      }

      this.items.push(new Element(data, priority));
    }
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

  getItems() {
    return [...this.items];
  }

  getSize() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}
