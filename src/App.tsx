import { useEffect, useState } from "react";

import BinarySearchTree from "structures/BinarySearchTree";

import "./global.scss";

const App = () => {
  const [logs, setLogs] = useState<any[]>([]);

  const log = (...args: any[]) => {
    setLogs((prev) =>
      prev.concat(
        args
          .map((item) =>
            typeof item === "object" ? JSON.stringify(item) : item
          )
          .join(" ")
      )
    );
  };

  useEffect(() => {
    setLogs([]);

    window.console.log = (...args: any[]) => {
      log(...args);
    };
  }, []);

  useEffect(() => {
    const bst = new BinarySearchTree(50);
    bst.add(25);
    bst.add(6);
    bst.add(41);
    bst.add(75);
    bst.add(12);
    bst.add(37);
    bst.add(46);
    bst.add(62);
    bst.add(87);
    bst.add(3);
    bst.add(56);
    bst.add(69);
    bst.add(80);
    bst.add(93);
    bst.print();

    const bst2 = new BinarySearchTree(50);
    bst2.add(25);
    bst2.add(6);
    bst2.add(41);
    bst2.add(75);
    bst2.add(12);
    bst2.add(37);
    bst2.add(46);
    bst2.add(62);
    bst2.add(87);
    bst2.add(3);
    bst2.add(56);
    bst2.add(69);
    bst2.add(80);
    bst2.add(93);
    bst2.remove(50);
    bst2.remove(75);
    bst2.print();
  }, []);

  return (
    <div style={{ width: "fit-content" }}>
      {logs.map((item, index) => (
        <p key={index} style={{ whiteSpace: "pre" }}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default App;
