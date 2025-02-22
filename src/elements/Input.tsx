import { styled } from "styled-components";
import { forwardRef } from "react";

const StyledInput = styled.input``;

export const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export const HiddenFileInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input type="file" style={{ display: "none" }} ref={ref} {...props} />;
});
