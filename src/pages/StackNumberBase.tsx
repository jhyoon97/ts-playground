/* eslint-disable react/no-array-index-key */
import { useState } from "react";

// components
import Input from "components/Input";
import Button from "components/Button";

// structures
import Stack from "structures/Stack";

const stack = new Stack();
const charset = "0123456789ABCDEF";

const StackNumberBase = () => {
  const [results, setResults] = useState<Array<string>>([]);
  const [numberInput, setNumberInput] = useState("");
  const [baseInput, setBaseInput] = useState("");

  const calc = (number: number, base: number) => {
    const division = Math.floor(number / base);

    if (division === 0) {
      stack.push(number);
      return;
    }

    stack.push(number % base);
    calc(division, base);
  };

  const handleConvert = () => {
    if (
      numberInput === "" ||
      baseInput === "" ||
      Number.isNaN(Number(numberInput)) ||
      Number.isNaN(Number(baseInput))
    ) {
      return;
    }

    if (Number(baseInput) > 16) {
      alert("base number는 16 이하만 가능합니다.");
      setBaseInput("");
      return;
    }

    calc(Number(numberInput), Number(baseInput));

    let result = "";

    while (!stack.isEmpty()) {
      result += charset[stack.pop()];
    }

    setResults([
      ...results,
      `${numberInput}을(를) ${baseInput}진법으로 변환 : ${result}`,
    ]);
    stack.clear();
    setNumberInput("");
    setBaseInput("");
  };

  return (
    <div>
      {results.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleConvert();
        }}
      >
        <Input
          onChange={(e) => setNumberInput(e.target.value)}
          value={numberInput}
        />
        <Input
          onChange={(e) => setBaseInput(e.target.value)}
          value={baseInput}
        />
        {numberInput && baseInput && <Button type="submit">CONVERT</Button>}
      </form>
    </div>
  );
};

export default StackNumberBase;
