import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@src/components";
import { LoginPage, HomePage } from "./pages";

export const paths = {
  home: "/",
  login: "/login",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
export default router;
