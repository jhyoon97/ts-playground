import { NavLink, Outlet } from "react-router-dom";
import { css } from "@emotion/react";

const box = css`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const side = css`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid #000;
`;

const Main = () => {
  return (
    <div css={box}>
      <div css={side}>
        <NavLink to="/stack-basic">Stack - basic</NavLink>
        <NavLink to="/stack-number-base">Stack - 진수변환</NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Main;
