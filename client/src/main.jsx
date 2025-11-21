import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { CourseContextProvider } from "./context/CourseContext.jsx";

export const server = "http://localhost:8989/api/v1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CourseContextProvider>
        <App />
      </CourseContextProvider>
    </UserProvider>
  </StrictMode>
);
