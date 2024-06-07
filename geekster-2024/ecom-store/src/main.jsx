import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import AppRouter from "./router/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<AppRouter />);
