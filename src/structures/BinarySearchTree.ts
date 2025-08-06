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
export default class BinarySearchTree {
  root: Vertex;

  constructor(id: number) {
    this.root = new Vertex(id);
  }

  has(id: number) {
    let target: Vertex | null = this.root;

    while (target) {
      if (id === target.id) {
        return true;
      }

      if (id < target.id) {
        target = target.left;
      } else {
        target = target.right;
      }
    }

    return false;
  }

  add(id: number) {
    const _add = (newId: number, vertex: Vertex) => {
      if (newId < vertex.id) {
        if (vertex.left) {
          _add(newId, vertex.left);
        } else {
          vertex.left = new Vertex(newId);
        }
      } else if (newId > vertex.id) {
        if (vertex.right) {
          _add(newId, vertex.right);
        } else {
          vertex.right = new Vertex(newId);
        }
      }
    };

    if (!this.has(id)) {
      _add(id, this.root);
    }
  }

  getMax(vertex?: Vertex) {
    let target = vertex ?? this.root;

    while (target.right) {
      target = target.right;
    }

    return target;
  }

  getMin(vertex?: Vertex) {
    let target = vertex ?? this.root;

    while (target.left) {
      target = target.left;
    }

    return target;
  }

  remove(id: number) {
    const _remove = (vertex: Vertex, targetId: number) => {
      if (targetId < vertex.id) {
        if (vertex.left) {
          vertex.left = _remove(vertex.left, targetId);
        }
      } else if (targetId > vertex.id) {
        if (vertex.right) {
          vertex.right = _remove(vertex.right, targetId);
        }
      } else {
        if (vertex.right && vertex.left) {
          const newVertex = this.getMin(vertex.right);
          _remove(vertex.right, newVertex.id);
          newVertex.right = vertex.right;
          newVertex.left = vertex.left;

          if (this.root.id === targetId) {
            this.root = newVertex;
          }

          return newVertex;
        }

        if (vertex.right) {
          return vertex.right;
        }

        if (vertex.left) {
          return vertex.left;
        }

        return null;
      }

      return vertex;
    };

    if (this.has(id)) {
      _remove(this.root, id);
    }
  }

  bfs(callback: (vertex: Vertex, level?: number) => void) {
    let queueStartIndex = 0;
    const queue: Array<[Vertex, number]> = [[this.root, 0]];

    while (queueStartIndex < queue.length) {
      const [currentVertex, currentLevel] = queue[queueStartIndex++];
      callback(currentVertex, currentLevel);

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
    }
  }

  printVertexId(id?: number | null) {
    // id를 5자리 문자열로 변환, 빈 부분은 x로 채우고 id는 최대한 가운데로 오도록
    const idStr = id ? String(id) : " ";
    const totalLength = 3;
    const padLength = totalLength - idStr.length;
    const leftPad = Math.floor(padLength / 2);
    const rightPad = padLength - leftPad;
    return " ".repeat(leftPad) + idStr + " ".repeat(rightPad);
  }

  print() {
    let queueStartIndex = 0;
    const queue: Array<[Vertex | null, number]> = [[this.root, 0]];

    while (queueStartIndex < queue.length) {
      const [currentVertex, currentLevel] = queue[queueStartIndex++];

      if (currentVertex === null) {
        continue;
      }

      queue.push([currentVertex?.left || null, currentLevel + 1]);
      queue.push([currentVertex?.right || null, currentLevel + 1]);
    }

    const maxLevel = queue[queue.length - 1][1];
    for (let i = 0; i <= maxLevel; i++) {
      const sameLevel = queue.filter(([, level]) => level === i);

      // 각 레벨의 노드들 사이 간격을 계산
      const nodeSpacing = Math.pow(2, maxLevel - i + 1) * 3;
      // 첫 번째 노드의 왼쪽 여백
      const leftPadding = Math.pow(2, maxLevel - i) * 3 - 2;

      const line = sameLevel
        .map(([vertex], index) => {
          const nodeText = this.printVertexId(vertex?.id);
          return index === 0
            ? nodeText
            : " ".repeat(nodeSpacing - 3) + nodeText;
        })
        .join("");

      console.log(" ".repeat(leftPadding) + line);
    }
  }

  preorder(callback: (vertex: Vertex) => void) {
    const traverse = (
      _callback: (vertex: Vertex) => void,
      vertex: Vertex | null
    ) => {
      if (vertex) _callback(vertex);
      if (vertex?.left) traverse(_callback, vertex.left);
      if (vertex?.right) traverse(_callback, vertex.right);
    };

    traverse(callback, this.root);
  }

  inorder(callback: (vertex: Vertex) => void) {
    const traverse = (
      _callback: (vertex: Vertex) => void,
      vertex: Vertex | null
    ) => {
      if (vertex?.left) traverse(_callback, vertex.left);
      if (vertex) _callback(vertex);
      if (vertex?.right) traverse(_callback, vertex.right);
    };

    traverse(callback, this.root);
  }

  postorder(callback: (vertex: Vertex) => void) {
    const traverse = (
      _callback: (vertex: Vertex) => void,
      vertex: Vertex | null
    ) => {
      if (vertex?.left) traverse(_callback, vertex.left);
      if (vertex?.right) traverse(_callback, vertex.right);
      if (vertex) _callback(vertex);
    };

    traverse(callback, this.root);
  }
}
