import { Outlet } from "react-router-dom";

import { Nav } from "./components";

export function MainLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
