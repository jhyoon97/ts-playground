/* eslint-disable react/button-has-type */
import { css } from "@emotion/react";

// types
import type { InputHTMLAttributes, ClassAttributes } from "react";

const box = css`
  padding: 0.5rem;
  margin-right: 0.5rem;
  height: 2rem;
  background: #fff;
  border: 1px solid black;
  font-size: 1rem;
  line-height: 1;
`;

const Button = (
  props: InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement>
) => {
  return <input css={box} {...props} />;
};

export default Button;
