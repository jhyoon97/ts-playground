/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";

// components
import Input from "components/Input";
import Button from "components/Button";

// structures
import Stack from "structures/Stack";

const stack = new Stack();

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const dataBox = css`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;
`;

const dataItem = css`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #333;
  border-radius: 1rem;
  color: #fff;
  width: 100%;
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

const StackBasic = () => {
  const [data, setData] = useState(stack.getItems());
  const [input, setInput] = useState("");

  useEffect(() => {
    return () => {
      stack.clear();
    };
  }, []);

  const handlePush = () => {
    stack.push(input);
    setData(stack.getItems());
    setInput("");
  };

  const handlePop = () => {
    stack.pop();
    setData(stack.getItems());
  };

  const handlePeak = () => {
    console.log(stack.getPeak());
  };

  const handleGetSize = () => {
    console.log(stack.getSize());
  };

  const handleClear = () => {
    stack.clear();
    setData(stack.getItems());
  };

  return (
    <div css={box}>
      <div css={dataBox}>
        {data.map((item, index) => (
          <div key={index} css={dataItem}>
            STACK[{index}] {item}
          </div>
        ))}
      </div>
      <form
        css={formBox}
        onSubmit={(e) => {
          e.preventDefault();
          handlePush();
        }}
      >
        <Input onChange={(e) => setInput(e.target.value)} value={input} />
        <Button type="submit">PUSH</Button>
        <Button type="button" onClick={handlePop}>
          POP
        </Button>
        <Button type="button" onClick={handlePeak}>
          PEAK
        </Button>
        <Button type="button" onClick={handleGetSize}>
          SIZE
        </Button>
        <Button type="button" onClick={handleClear}>
          CLEAR
        </Button>
      </form>
    </div>
  );
};

export default StackBasic;
