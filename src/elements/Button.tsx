import { styled } from "styled-components";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  const StyledButton = styled.button`
    background: none;
    background-color: ${({ theme }) =>
      theme.colors.pallete.splitComplementary.right};
    cursor: pointer;
    border-radius: 5px;
  `;
  return <StyledButton>{children}</StyledButton>;
};
