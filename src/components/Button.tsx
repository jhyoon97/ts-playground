/* eslint-disable react/button-has-type */
import { css } from "@emotion/react";

// types
import type { ButtonHTMLAttributes, ClassAttributes } from "react";

const box = css`
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  background: #f0f0f0;
  height: 2rem;
  border: 1px solid black;
  line-height: 1;
`;

const Button = ({
  children,
  type,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  ClassAttributes<HTMLButtonElement>) => {
  return (
    <button css={box} type={type || "button"} {...props}>
      {children}
    </button>
  );
};

export default Button;
