import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./components/HomePage";
import NewBook from "./components/NewBook";
import MyBooks from "./components/MyBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "new-book", element: <NewBook /> },
      { path: "my-books", element: <MyBooks /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
