import { useState } from "react";

// structures
import Stack from "structures/Stack";

const stack = new Stack();

const Main = () => {
  const [data, setData] = useState(stack.getItems());
  const [input, setInput] = useState("");

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
    console.log(stack.peek());
  };

  const handleClear = () => {
    stack.clear();
    setData(stack.getItems());
  };

  return (
    <div>
      {data.map((item) => (
        <div>{item}</div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePush();
        }}
      >
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button type="submit">PUSH</button>
        <button type="button" onClick={handlePop}>
          POP
        </button>
        <button type="button" onClick={handlePeak}>
          PEAK
        </button>
        <button type="button" onClick={handleClear}>
          CLEAR
        </button>
      </form>
    </div>
  );
};

export default Main;
