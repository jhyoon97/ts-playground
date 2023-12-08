/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// structures
import SingleLinkedList from "structures/SingleLinkedList";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const list = new SingleLinkedList<number>();
list.append(0);
list.append(1);
list.insert(list.getSize(), 99);
list.insert(list.getSize(), 999);
list.insert(list.getSize(), 9999);

console.log(list.indexOf(9999));
console.log(list.getItems());

const StackBasic = () => {
  return <div css={box} />;
};

export default StackBasic;
