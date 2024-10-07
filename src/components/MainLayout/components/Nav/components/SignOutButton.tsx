import { styled } from "styled-components";

import { signOut } from "@src/firebase";
import { Button } from "@src/elements";

export const SignOutButton = () => {
  const StyledButton = styled(Button)`
    width: 5rem;
  `;
  return <StyledButton onClick={signOut}>Sign out</StyledButton>;
};
