class Node<T> {
  element: T;

  next: null | Node<T> = null;

  constructor(element: T) {
    this.element = element;
  }
}

export default class SingleLinkedList<T> {
  length = 0;

  head: Node<T> | null = null;

  append(element: T) {
    if (this.head === null) {
      this.head = new Node(element);
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(element);
    }

    this.length++;
  }

  insert(index: number, element: T) {
    if (index >= 0 && index <= this.length && this.head) {
      const newNode = new Node(element);

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
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
          newNode.next = currentNode;

          this.length++;
        }
      }

      return true;
    }

    return false;
  }

  removeAt(index: number) {
    if (index >= 0 && index <= this.length && this.head) {
      if (index === 0) {
        this.head = this.head.next;
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
}
