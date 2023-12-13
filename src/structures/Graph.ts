import Map from "./Map";
import Queue from "./Queue";

interface SearchCallback {
  (node: string): void;
}

interface VisitStatus {
  [key: string]: "white" | "grey" | "black";
}

export default class Graph {
  vertices: Array<string> = [];

  adjacentList = new Map<Array<string>>();

  addVertex(vertex: string) {
    this.vertices.push(vertex);
    this.adjacentList.set(vertex, []);
  }

  addEdge(vertex: string, adjacentVertex: string) {
    this.adjacentList.get(vertex).push(adjacentVertex);
    this.adjacentList.get(adjacentVertex).push(vertex);
  }

  bfs(startVertex: string, callback: SearchCallback) {
    const visitStatus = this.getInitialVisitStatus();
    const queue = new Queue<string>();

    queue.enqueue(startVertex);

    while (!queue.getIsEmpty()) {
      const currentVertex = queue.dequeue();

      if (currentVertex !== undefined) {
        const adjacentVertices = this.adjacentList.get(currentVertex);
        visitStatus[currentVertex] = "grey";

        for (let i = 0; i < adjacentVertices.length; i++) {
          const adjacentVertex = adjacentVertices[i];

          if (visitStatus[adjacentVertex] === "white") {
            visitStatus[adjacentVertex] = "grey";
            queue.enqueue(adjacentVertex);
          }
        }

        visitStatus[currentVertex] = "black";
        if (callback) {
          callback(currentVertex);
        }
      }
    }
  }

  dfs(
    startVertex: string,
    callback: SearchCallback,
    prevVisitStatus?: VisitStatus
  ) {
    const visitStatus = prevVisitStatus || this.getInitialVisitStatus();
    const adjacentVertices = this.adjacentList.get(startVertex);
    visitStatus[startVertex] = "grey";
    if (callback) {
      callback(startVertex);
    }

    for (let i = 0; i < adjacentVertices.length; i++) {
      const adjacentVertex = adjacentVertices[i];

      if (visitStatus[adjacentVertex] === "white") {
        visitStatus[adjacentVertex] = "grey";
        this.dfs(adjacentVertex, callback, visitStatus);
      }
    }

    visitStatus[startVertex] = "black";
  }

  private getInitialVisitStatus() {
    const visitStatus: VisitStatus = {};

    this.vertices.forEach((vertex) => {
      visitStatus[vertex] = "white";
    });

    return visitStatus;
  }
}
