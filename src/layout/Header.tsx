import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { validateEmail } from "../ultils/regex";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../app/auth/thunk";
import { LoginData } from "../app/auth/type";
import { selectIsLogin, selectUser } from "../app/auth/slice";
import { AiFillHome } from "react-icons/ai";

export default function Header() {
  const dispatch = useDispatch();

  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: "",
  } as LoginData);

  const isLogin = useSelector(selectIsLogin);
  const user = useSelector(selectUser);

  const handleLogin = () => {
    if (accountInfo.email === "" || accountInfo.password === "") {
      return alert("Email or password is empty");
    }
    if (!validateEmail(accountInfo.email)) {
      return alert("Email is invalid");
    }
    if (accountInfo.password.length < 6) {
      return alert("Password must be greater than 6 characters");
    }
    const result = dispatch(login(accountInfo) as any);

    return result;
  };

  const handleLogout = () => {
    const result = dispatch(logout() as any);
    return result;
  };

  return (
    <header className="border-b-8 border-black text-white pt-4 pb-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <NavLink to="/" className={"nav-link flex items-center"}>
            <AiFillHome className="text-gray-900 hover:text-gray-700 text-5xl" />
            <p className="text-2xl text-gray-900 hover:text-gray-700 ml-3">
              Funny Video
            </p>
          </NavLink>
          <div className="right-side flex justify-end items-center w-4/12">
            {isLogin ? (
              <React.Fragment>
                <NavLink to="/upload" className={"nav-link"}>
                  <p className="mr-10 p-2 text-gray-900 border-gray-900 border-b-8 hover:border-b-2 placeholder-gray-500 border-2 rounded-md">
                    Create Video
                  </p>
                </NavLink>
                <p className="text-gray-900 font-bold text-md mr-3">{user?.email}</p>
                <button
                  type="button"
                  className="mr-5 p-2 text-gray-900 border-gray-900 border-b-8 hover:border-b-2 placeholder-gray-500 border-2 rounded-md"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <input
                  type="email"
                  onChange={(e) =>
                    setAccountInfo({ ...accountInfo, email: e.target.value })
                  }
                  value={accountInfo.email}
                  placeholder="Email"
                  className="mr-5 p-2 text-gray-900 border-gray-900 border-b-8 focus:border-b-2 placeholder-gray-500 border-2 rounded-md"
                />
                <input
                  type="password"
                  onChange={(e) =>
                    setAccountInfo({ ...accountInfo, password: e.target.value })
                  }
                  value={accountInfo.password}
                  placeholder="Password"
                  className="mr-5 p-2 text-gray-900 border-gray-900 border-b-8 focus:border-b-2 placeholder-gray-500 border-2 rounded-md"
                />
                <button
                  type="button"
                  className="mr-5 p-2 text-gray-900 border-gray-900 border-b-8 hover:border-b-2 transition-all delay-100   placeholder-gray-500 border-2 rounded-md"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
