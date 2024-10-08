import { styled } from "styled-components";

import { GoogleSignInButton } from "./components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: center;
  gap: 1rem;
`;

export const LoginPage = () => {
  return (
    <Container>
      <GoogleSignInButton />
    </Container>
  );
};
