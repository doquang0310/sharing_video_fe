import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { validateEmail } from "../ultils/regex";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../app/networks/auth/thunk";
import { LoginData } from "../app/networks/auth/type";
import { selectIsLogin, selectUser } from "../app/networks/auth/slice";

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
    <header className="bg-neutral-950 text-white pt-4 pb-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="left-side flex items-center w-2/8">
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
          <div className="right-side flex items-center justify-between w-3/12">
            {isLogin ? (
              <React.Fragment>
                <NavLink to="/upload" className={"nav-link"}>
                  <p>Create Video</p>
                </NavLink>
                <p>{user?.email}</p>
                <button type="button" onClick={handleLogout}>
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
                  className="text-black mr-5 rounded-sm pl-1"
                />
                <input
                  type="password"
                  onChange={(e) =>
                    setAccountInfo({ ...accountInfo, password: e.target.value })
                  }
                  value={accountInfo.password}
                  placeholder="Password"
                  className="text-black mr-5 rounded-sm pl-1"
                />
                <button type="button" onClick={handleLogin}>
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
