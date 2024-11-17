import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { paths } from "@src/router";
import { Button, Img } from "@src/elements";
import { signInWithGoogle } from "@src/firebase";
import GoogleIcon from "@src/assets/icons/google256.png";

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white} !important;
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid
    ${({ theme }) => theme.colors.pallete.splitComplementary.right} !important;
  gap: 0.5rem;

  > img {
    height: 2rem;
  }
`;

export const GoogleSignInButton = () => {
  const navigate = useNavigate();

  const onClick = async () => {
    await signInWithGoogle();
    navigate(paths.home);
  };

  return (
    <StyledButton onClick={onClick}>
      <Img src={GoogleIcon} />
      Sign in with Google
    </StyledButton>
  );
};
