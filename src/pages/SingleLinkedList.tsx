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

const StackBasic = () => {
  return <div css={box} />;
};

export default StackBasic;
