import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@src/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <div>Login page!</div>,
      },
    ],
  },
]);

export default router;
