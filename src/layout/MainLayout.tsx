import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Notification from "../components/common/Notification";

export default function MainLayout() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto">
        <Notification />
        <Outlet />
      </div>
    </div>
  );
}
