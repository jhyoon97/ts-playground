/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// structures
import Set from "structures/Set";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const set1 = new Set();
const set2 = new Set();

const SetPage = () => {
  return <div css={box} />;
};

export default SetPage;
