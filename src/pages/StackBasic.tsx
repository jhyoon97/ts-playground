/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";

// components
import Input from "components/Input";
import Button from "components/Button";

// structures
import Stack from "structures/Stack";

const stack = new Stack();

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
    console.log(stack.peak());
  };

  const handleGetSize = () => {
    console.log(stack.getSize());
  };

  const handleClear = () => {
    stack.clear();
    setData(stack.getItems());
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <form
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
