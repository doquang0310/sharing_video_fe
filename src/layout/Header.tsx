import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const isLogin = false;
  return (
    <header className="bg-neutral-950 text-white pt-4 pb-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="left-side flex items-center">
            <NavLink to="/" className={"nav-link"}>
              <img
                src="/images/logo512.png"
                alt="logo"
                width={50}
                height={50}
              />
            </NavLink>
            <p className="text-2xl ml-5">Funny Video</p>
          </div>
          <div className="right-side flex items-center">
            {isLogin ? (
              <p>Đã login</p>
            ) : (
              <NavLink
                to="/login"
                className={(isActive) =>
                  "nav-link" + (!isActive ? "active" : "")
                }
              >
                <p className="cursor-pointer">Login</p>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
