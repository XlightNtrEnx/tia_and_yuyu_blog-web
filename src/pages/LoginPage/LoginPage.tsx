import { styled } from "styled-components";

import { GoogleSignInButton } from "./components";

export const LoginPage = () => {
  const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    align-items: center;
    gap: 1rem;
  `;

  return (
    <Container>
      <GoogleSignInButton />
    </Container>
  );
};
