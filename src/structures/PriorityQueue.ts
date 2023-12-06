interface PriorityQueueElement<T> {
  element: T;
  priority: number;
}

export default class PriorityQueue<T> {
  items: Array<PriorityQueueElement<T>> = [];

  enqueue(item: PriorityQueueElement<T>) {
    if (this.items.length === 0) {
      this.items.push(item);
    } else {
      for (let i = 0; i < this.items.length; i += 1) {
        if (item.priority < this.items[i].priority) {
          this.items.splice(i, 0, item);

          return;
        }
      }

      this.items.push(item);
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

  getSize() {
    return this.items.length;
  }
}
