/* eslint-disable react/no-array-index-key */
import { useState } from "react";
import { css } from "@emotion/react";

// components
import Input from "components/Input";
import Button from "components/Button";

// structures
import Stack from "structures/Stack";

const stack = new Stack();
const charset = "0123456789ABCDEF";

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

  & > mark {
    background: none;
    color: yellow;
  }
`;

const resultBox = css`
  padding: 1rem;
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

const StackNumberBase = () => {
  const [result, setResult] = useState<string>("");
  const [process, setProcess] = useState<Array<any>>([]);
  const [numberInput, setNumberInput] = useState("");
  const [numberInputSave, setNumberInputSave] = useState("");
  const [baseNumber, setBaseNumber] = useState(0);

  const conversion = (number: number, base: number) => {
    const quotient = Math.floor(number / base);

    if (quotient === 0) {
      stack.push({ number, quotient, remainder: number });
      return;
    }

    stack.push({ number, quotient, remainder: number % base });
    conversion(quotient, base);
  };

  const handleConversion = (base: number) => {
    conversion(Number(numberInput), Number(base));

    setProcess(stack.getItems());
    let resultString = "";

    while (!stack.getIsEmpty()) {
      resultString += charset[stack.pop().remainder];
    }

    setNumberInputSave(numberInput);
    setResult(resultString);
    setBaseNumber(base);
    stack.clear();
  };

  return (
    <div css={box}>
      <div css={dataBox}>
        {process.map((item, index) => (
          <div key={index} css={dataItem}>
            STACK[{index}] {" - "}
            {`${item.number}/${baseNumber} = ${item.quotient}`} ...
            <mark> {item.remainder}</mark>
          </div>
        ))}
      </div>
      <div css={resultBox}>
        {result && (
          <div css={dataItem}>
            {numberInputSave}의 {baseNumber}진수: {result}
          </div>
        )}
      </div>
      <form css={formBox}>
        <Input
          onChange={(e) => setNumberInput(e.target.value)}
          value={numberInput}
        />
        <Button type="button" onClick={() => handleConversion(2)}>
          2진수
        </Button>
        <Button type="button" onClick={() => handleConversion(8)}>
          8진수
        </Button>
        <Button type="button" onClick={() => handleConversion(10)}>
          10진수
        </Button>
        <Button type="button" onClick={() => handleConversion(16)}>
          16진수
        </Button>
      </form>
    </div>
  );
};

export default StackNumberBase;
