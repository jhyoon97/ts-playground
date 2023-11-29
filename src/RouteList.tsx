import { Routes, Route } from "react-router-dom";
import { css } from "@emotion/react";

const test = css`
  background: red;
`;

const RouteList = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div css={test}>hello world</div>} />
        <Route path="/hello" element={<div>hello</div>} />
      </Route>
    </Routes>
  );
};

export default RouteList;
