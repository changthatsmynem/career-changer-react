import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import Error from "./Error";
import "./assets/style/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // insert your path here
  { path: "/", element: <App /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/error",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

{
  /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/path” element={<component />} />
          <Route
            path="/path"
            element={<component />}
          />
        </Routes>
      </BrowserRouter> */
}
