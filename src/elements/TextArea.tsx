import { styled } from "styled-components";

const StyledTextArea = styled.textarea`
  &:focus {
    outline: none;
  }
`;

export const TextArea = ({ ...props }) => {
  return <StyledTextArea {...props} />;
};
