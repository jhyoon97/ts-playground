class Node<T> {
  element: T;

  next: null | Node<T> = null;

  constructor(element: T) {
    this.element = element;
  }
}

interface FindIndex<T> {
  (element: T): boolean;
}

export default class SingleLinkedList<T> {
  private length = 0;

  private head: Node<T> | null = null;

  append(element: T) {
    const newNode = new Node(element);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
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
        }
      }

      this.length++;
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

      this.length--;
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

  findIndex(callbacnFunction: FindIndex<Node<T>>) {
    if (this.head) {
      let currentNode: Node<T> | null = this.head;
      let currentIndex = 0;

      while (currentNode) {
        if (callbacnFunction(currentNode)) {
          return currentIndex;
        }
        currentNode = currentNode.next;
        currentIndex++;
      }

      return -1;
    }

    return -1;
  }

  getNode(index: number) {
    if (this.head) {
      let currentNode: Node<T> | null = this.head;
      let currentIndex = 0;

      while (currentNode && currentIndex <= index) {
        if (currentIndex === index) {
          return currentNode;
        }

        currentNode = currentNode.next;
        currentIndex++;
      }
    }

    return undefined;
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
