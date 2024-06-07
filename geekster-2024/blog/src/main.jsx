import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Router from "./router";
import PostsContextProvider from "./contexts/posts";
import AuthContextProvider from "./contexts/auth";

const Main = () => {
  return (
    <AuthContextProvider>
      <PostsContextProvider>
        <Router />
      </PostsContextProvider>
    </AuthContextProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
