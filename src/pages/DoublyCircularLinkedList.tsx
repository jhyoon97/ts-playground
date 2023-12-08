/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// structures
import DoublyCircularLinkedList from "structures/DoublyCircularLinkedList";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const list = new DoublyCircularLinkedList<number>();

const DoublyCircularLinkedListPage = () => {
  return <div css={box} />;
};

export default DoublyCircularLinkedListPage;
