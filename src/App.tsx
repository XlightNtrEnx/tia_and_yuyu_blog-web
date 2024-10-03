import { RouterProvider } from "react-router-dom";

import router from "./router";

export default function App() {
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}
