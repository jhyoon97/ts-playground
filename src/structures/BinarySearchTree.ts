class Vertex {
  id: number;

  left: Vertex | null;

  right: Vertex | null;

  constructor(id: number) {
    this.id = id;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: Vertex;

  constructor(id: number) {
    this.root = new Vertex(id);
  }

  add(newId: number, vertex?: Vertex) {
    let target = null;

    if (!vertex) {
      target = this.root;
    } else {
      target = vertex;
    }

    if (newId < target.id) {
      if (target.left) {
        this.add(newId, target.left);
      } else {
        target.left = new Vertex(newId);
      }
    } else if (newId > target.id) {
      if (target.right) {
        this.add(newId, target.right);
      } else {
        target.right = new Vertex(newId);
      }
    }
  }

  bfs(callback: (vertex: Vertex, level?: number) => void) {
    let queueStartIndex = 0;
    const queue: Array<[Vertex, number]> = [[this.root, 0]];

    while (queueStartIndex < queue.length) {
      const [currentVertex, currentLevel] = queue[queueStartIndex++];

      if (
        currentVertex.left &&
        !queue.find(
          ([visitVertex]) => visitVertex.id === currentVertex.left?.id
        )
      ) {
        queue.push([currentVertex.left, currentLevel + 1]);
      }

      if (
        currentVertex.right &&
        !queue.find(
          ([visitVertex]) => visitVertex.id === currentVertex.right?.id
        )
      ) {
        queue.push([currentVertex.right, currentLevel + 1]);
      }

      callback(currentVertex, currentLevel);
    }
  }
}
