import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const UploadVideo = React.lazy(() => import("../pages/UploadVideo"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const MainLayout = React.lazy(() => import("../layout/MainLayout"));

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/404" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
