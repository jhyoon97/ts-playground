import { useEffect } from "react";

import { BinarySearchTree } from "structures/BinarySearchTree";

const App = () => {
  useEffect(() => {
    const bst = new BinarySearchTree(50);

    bst.add(25);
    bst.add(12);
    bst.add(37);
    bst.add(75);
    bst.add(63);
    bst.add(87);

    bst.bfs((vertex, level) => {
      console.log(vertex.id, level);
    });
  }, []);

  return <div />;
};

export default App;
