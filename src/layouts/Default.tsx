import { NavLink, Outlet } from "react-router-dom";
import { css } from "@emotion/react";

// utils
import routeList from "utils/routeList";

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

const navItem = css`
  color: #000;

  &.active {
    color: green;
  }
`;

const outletBox = css`
  flex: 1;
`;

const Main = () => {
  return (
    <div css={box}>
      <div css={side}>
        {routeList.map((route) => (
          <NavLink key={route.path} css={navItem} to={route.path}>
            {route.title}
          </NavLink>
        ))}
      </div>

      <div css={outletBox}>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
