class Node<T> {
  element: T;

  prev: null | Node<T> = null;

  next: null | Node<T> = null;

  constructor(element: T) {
    this.element = element;
  }
}

export default class DoublyLinkedList<T> {
  private length = 0;

  private head: Node<T> | null = null;

  private tail: Node<T> | null = null;

  append(element: T) {
    const newNode = new Node(element);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
      newNode.prev = currentNode;
      this.tail = newNode;
    }

    this.length++;
  }

  insert(index: number, element: T) {
    if (index >= 0 && index <= this.length && this.head && this.tail) {
      const newNode = new Node(element);

      if (index === 0) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      } else if (index === this.length) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let currentIndex = 0;
        let currentNode: Node<T> | null = this.head;
        let previousNode = null;

        while (currentNode && currentIndex++ < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        if (previousNode) {
          previousNode.next = newNode;
          newNode.prev = previousNode;
          if (currentNode) {
            currentNode.prev = newNode;
          }
          newNode.next = currentNode;

          this.length++;
        }
      }

      return true;
    }

    return false;
  }

  removeAt(index: number) {
    if (index >= 0 && index <= this.length && this.head && this.tail) {
      if (index === 0) {
        if (this.head.next) {
          this.head.next.prev = null;
        }
        this.head = this.head.next;
      } else if (index === this.length) {
        if (this.tail.prev) {
          this.tail.prev.next = null;
          this.tail = this.tail.prev;
        }
      } else {
        let currentIndex = 0;
        let currentNode: Node<T> | null = this.head;
        let previousNode = null;

        while (currentNode && currentIndex++ < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        if (previousNode && currentNode) {
          previousNode.next = currentNode.next;
          if (currentNode.next) {
            currentNode.next.prev = previousNode;
          }
        }
      }

      return true;
    }

    return false;
  }

  remove(element: T) {
    const index = this.indexOf(element);

    return this.removeAt(index);
  }

  indexOf(element: T) {
    if (this.head) {
      let currentNode: Node<T> | null = this.head;
      let currentIndex = 0;

      while (currentNode) {
        if (currentNode.element === element) {
          return currentIndex;
        }
        currentNode = currentNode.next;
        currentIndex++;
      }

      return -1;
    }

    return -1;
  }

  getIsEmpty() {
    return this.length === 0;
  }

  getSize() {
    return this.length;
  }

  getItems() {
    const items = [];
    let currentNode = this.head;

    while (currentNode) {
      items.push(currentNode);

      currentNode = currentNode.next;
    }

    return items;
  }

  getHead() {
    return this.head;
  }
}
