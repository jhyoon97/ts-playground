interface TraverseCallback<T> {
  (node: Node<T>): void;
}

class Node<T> {
  key: T;

  left: Node<T> | null;

  right: Node<T> | null;

  constructor(key: T) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree<T> {
  root: Node<T> | null = null;

  insert(key: T) {
    const newNode = new Node(key);

    if (this.root) {
      this.insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }

  has(key: T) {
    this.hasNode(this.root, key);
  }

  inOrderTraverse(callback: TraverseCallback<T>) {
    this.inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverse(callback: TraverseCallback<T>) {
    this.preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback: TraverseCallback<T>) {
    this.postOrderTraverseNode(this.root, callback);
  }

  min() {
    return this.minNode(this.root);
  }

  max() {
    return this.maxNode(this.root);
  }

  remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }

  private insertNode(node: Node<T>, newNode: Node<T>) {
    if (node.key > newNode.key) {
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else if (node.key < newNode.key) {
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }

  private inOrderTraverseNode(
    node: Node<T> | null,
    callback: TraverseCallback<T>
  ) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  private preOrderTraverseNode(
    node: Node<T> | null,
    callback: TraverseCallback<T>
  ) {
    if (node) {
      callback(node);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  private postOrderTraverseNode(
    node: Node<T> | null,
    callback: TraverseCallback<T>
  ) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  }

  private minNode(node: Node<T> | null) {
    if (node) {
      let currentNode = node;

      while (currentNode && currentNode.left) {
        currentNode = currentNode.left;
      }

      return currentNode;
    }

    return null;
  }

  private maxNode(node: Node<T> | null) {
    if (node) {
      let currentNode = node;

      while (currentNode && currentNode.right) {
        currentNode = currentNode.right;
      }

      return currentNode;
    }

    return null;
  }

  private hasNode(node: Node<T> | null, key: T): boolean {
    if (!node) {
      return false;
    }

    if (node.key === key) {
      return true;
    }

    if (node.key > key) {
      return this.hasNode(node.left, key);
    }

    return this.hasNode(node.right, key);
  }

  private removeNode(node: Node<T> | null, key: T): Node<T> | null {
    if (node) {
      if (node.key > key) {
        node.left = this.removeNode(node.left, key);
        return node;
      }

      if (node.key < key) {
        node.right = this.removeNode(node.right, key);
        return node;
      }

      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const replaceNode = this.minNode(node.right);
      if (replaceNode) {
        node.key = replaceNode.key;
        node.right = this.removeNode(node.right, replaceNode.key);
        return node;
      }
    }

    return null;
  }
}
