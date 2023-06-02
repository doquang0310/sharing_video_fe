import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
