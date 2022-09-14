import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* test 쇼핑몰 미리보기에 url에 베이스로 skin-skin6가 들어있음 */}
    <BrowserRouter basename="/skin-skin6">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
