import Header from "../components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { lazy, Suspense } from "react";

const LazyLoadedPost = lazy(() => import("../pages/Post"));
const LazyLoadedAuth = lazy(() => import("../pages/Auth"));
const LazyLoadedProfile = lazy(() => import("../pages/Profile"));

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <Suspense fallback={<h1>Loading auth...</h1>}>
              <LazyLoadedAuth />
            </Suspense>
          }
        />
        <Route path="/post" element={<LazyLoadedPost />} />
        <Route path="/profile" element={<LazyLoadedProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
