import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import { Nav } from "./components";

export function MainLayout() {
  const Container = styled.div`
    min-height: 100vh;
    height: 100%;
    background-color: ${(props) => props.theme.backgroundColor};
    position: relative;
  `;
  return (
    <Container id="app">
      <Nav />
      <Outlet />
    </Container>
  );
}
