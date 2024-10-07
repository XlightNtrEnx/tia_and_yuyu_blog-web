import { styled } from "styled-components";
import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

export const Button = ({ children, onClick, text, ...props }: ButtonProps) => {
  const StyledButton = styled.button`
    background: none;
    background-color: ${({ theme }) =>
      theme.colors.pallete.splitComplementary.right};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    height: 3rem;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  `;
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
