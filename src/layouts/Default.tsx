import { NavLink, Outlet } from "react-router-dom";
import { css } from "@emotion/react";

const box = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

const side = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-right: 1px solid #000;
`;

const outletBox = css`
  flex: 1;
`;

const Main = () => {
  return (
    <div css={box}>
      <div css={side}>
        <NavLink to="/stack-basic">Stack - basic</NavLink>
        <NavLink to="/stack-number-base">Stack - 진수변환</NavLink>
        <NavLink to="/queue-basic">Queue - basic</NavLink>
        <NavLink to="/priority-queue">우선순위 Queue</NavLink>
        <NavLink to="/single-linked-list">단방향 링크드 리스트</NavLink>
      </div>

      <div css={outletBox}>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
