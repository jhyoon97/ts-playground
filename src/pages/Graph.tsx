/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// structures
import Graph from "structures/Graph";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const graph = new Graph();
/* const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
myVertices.forEach((vertex) => graph.addVertex(vertex));
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.dfs("A", (vertex) => {
  console.log(vertex);
}); */

const GraphPage = () => {
  return <div css={box} />;
};

export default GraphPage;
