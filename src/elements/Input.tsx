import { styled } from "styled-components";

const StyledInput = styled.input`
  min-height: 2rem;
  border-radius: 10px;
  outline: none;
  border: 2px solid black;
`;

export const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};
