/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// structures
import Map from "structures/Map";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const map = new Map();

const MapPage = () => {
  return <div css={box} />;
};

export default MapPage;
