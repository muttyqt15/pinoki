import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PageProvider } from "./context/PageContext";

const root = document.createElement("div");
root.className = "container";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <PageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PageProvider>
);
