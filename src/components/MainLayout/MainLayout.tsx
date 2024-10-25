import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import { Nav } from "./components";

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.softWhite};
`;

export function MainLayout() {
  return (
    <Container id="app">
      <Nav />
      <Outlet />
    </Container>
  );
}
