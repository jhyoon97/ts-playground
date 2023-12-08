/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// structures
import DoublyLinkedList from "structures/DoublyLinkedList";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const list = new DoublyLinkedList<number>();

const DoublyLinkedListPAge = () => {
  return <div css={box} />;
};

export default DoublyLinkedListPAge;
