import React from "react";
import ReactDOM from "react-dom/client";
// The shared styles load first, so each section's CSS can build on them
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
