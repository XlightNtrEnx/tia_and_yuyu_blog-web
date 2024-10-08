import { styled } from "styled-components";

import { signOut } from "@src/firebase";
import { Button } from "@src/elements";

const StyledButton = styled(Button)`
  width: 5rem !important;
`;

export const SignOutButton = () => {
  return <StyledButton onClick={signOut}>Sign out</StyledButton>;
};
