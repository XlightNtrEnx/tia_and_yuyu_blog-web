import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import Pochacco from "@src/assets/images/pochacco.png";
import { Nav } from "./components";

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background: url(${Pochacco});
  background-size: 300px;
  background-repeat: repeat;
  position: relative;
`;

export function MainLayout() {
  return (
    <Container id="app">
      <Nav />
      <Outlet />
    </Container>
  );
}
