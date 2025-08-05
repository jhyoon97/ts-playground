import { useEffect, useState } from "react";

import { BinarySearchTree } from "structures/BinarySearchTree";

const App = () => {
  const [logs, setLogs] = useState<any[]>([]);

  const log = (newLog: any) => {
    console.log(newLog);
    setLogs((prev) => prev.concat(newLog));
  };

  useEffect(() => {
    const bst = new BinarySearchTree(50);

    bst.add(25);
    bst.add(12);
    bst.add(37);
    bst.add(75);
    bst.add(63);
    bst.add(87);

    bst.postorder((vertex) => log(vertex.id));
  }, []);

  return (
    <div>
      {logs.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default App;
