import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context/Context.jsx";
import AddBooks from "./components/AddBooks.jsx";
import AppRouter from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  </StrictMode>
);
