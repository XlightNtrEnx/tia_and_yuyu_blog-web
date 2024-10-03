import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    children: [
      {
        path: "login",
        element: <div>fucku</div>,
      },
    ],
  },
]);

export default router;
