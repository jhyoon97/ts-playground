/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";

// components
import Button from "components/Button";

// structures
import Queue from "structures/Queue";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const dataBox = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

const dataItem = css`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  padding: 0.5rem;
  background: #333;
  border-radius: 1rem;
  color: #fff;
  text-align: center;
`;

const formBox = css`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const queue = new Queue<number>();
let queueNumber = 0;

const QueueBasic = () => {
  const [data, setData] = useState(queue.getItems());

  useEffect(() => {
    return () => {
      queue.clear();
    };
  }, []);

  const handleEnqueue = () => {
    queue.enqueue(queueNumber++);
    setData(queue.getItems());
  };

  const handleDequeue = () => {
    queue.dequeue();
    setData(queue.getItems());
  };

  const handleGetFirst = () => {
    console.log(queue.getFirst());
  };

  const handleGetSize = () => {
    console.log(queue.getSize());
  };

  const handlePrint = () => {
    console.log(queue.getItems());
  };

  const handleClear = () => {
    queue.clear();
    setData(queue.getItems());
  };

  return (
    <div css={box}>
      <div css={dataBox}>
        {data.map((item) => (
          <div key={item} css={dataItem}>
            Queue[{item}]
          </div>
        ))}
      </div>
      <form
        css={formBox}
        onSubmit={(e) => {
          e.preventDefault();
          handleEnqueue();
        }}
      >
        <Button type="submit">ENQUEUE</Button>
        <Button type="button" onClick={handleDequeue}>
          DEQUEUE
        </Button>
        <Button type="button" onClick={handleGetFirst}>
          FIRST
        </Button>
        <Button type="button" onClick={handleGetSize}>
          SIZE
        </Button>
        <Button type="button" onClick={handlePrint}>
          PRINT
        </Button>
        <Button type="button" onClick={handleClear}>
          CLEAR
        </Button>
      </form>
    </div>
  );
};

export default QueueBasic;
