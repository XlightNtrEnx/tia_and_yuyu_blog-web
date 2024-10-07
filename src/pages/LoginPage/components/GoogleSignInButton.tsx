import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";

import { paths } from "@src/router";
import { userAtom } from "@src/atoms";
import { Button, Img } from "@src/elements";
import { signInWithGoogle } from "@src/firebase";
import GoogleIcon from "@src/icons/google_icon256.png";

export const GoogleSignInButton = () => {
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
  const user = useAtomValue(userAtom);
  const navigate = useNavigate();

  const onClick = async () => {
    await signInWithGoogle();
    if (user) navigate(paths.home);
  };

  return (
    <StyledButton onClick={onClick}>
      <Img src={GoogleIcon} />
      Sign in with Google
    </StyledButton>
  );
};
