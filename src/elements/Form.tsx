import { styled } from "styled-components";
import { ReactNode } from "react";

const StyledForm = styled.form``;

interface Props {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export const Form = ({ onSubmit, children, ...props }: Props) => {
  return (
    <StyledForm onSubmit={onSubmit} {...props}>
      {children}
    </StyledForm>
  );
};
