import { RouterProvider } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";

import router from "@src/router";
import theme from "@src/theme";

export default function App() {
  const Container = styled.div``;

  return (
    <Container id="app">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Container>
  );
}
