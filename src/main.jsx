import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import SoundContxProvider from "./store/SoundContx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <SoundContxProvider>
    <App />
  </SoundContxProvider>
);
