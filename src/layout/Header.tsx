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
  const [showMenu, setShowMenu] = useState(false);

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
    <header className="border-b-8 border-black  pt-4 pb-4">
      <nav
        className="
        container mx-auto 
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div>
          <NavLink
            to="/"
            className={"nav-link flex items-center"}
            data-testid="home-element"
          >
            <AiFillHome className="text-gray-900 hover:text-gray-700 text-5xl" />
            <p className="text-2xl text-gray-900 hover:text-gray-700 ml-3">
              Funny Video
            </p>
          </NavLink>
        </div>
        <svg
          onClick={() => setShowMenu(!showMenu)}
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div
          className={`${
            showMenu == true ? "" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
          id="menu"
        >
          <div
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            {isLogin ? (
              <React.Fragment>
                <NavLink
                  to="/upload"
                  className={"nav-link"}
                  data-testid="create-video"
                >
                  <p className="mt-2 md:mt-0 mr-10 p-2 text-gray-900 border-gray-900 border-b-8 hover:border-b-2 placeholder-gray-500 border-2 rounded-md">
                    Create Video
                  </p>
                </NavLink>
                <p
                  className="mt-2 md:mt-0 text-gray-900 font-bold text-md mr-3"
                  data-testid="email-header"
                >
                  {user?.email}
                </p>
                <button
                  type="button"
                  data-testid="logout-button"
                  className="mt-2 md:mt-0 mr-5 p-2 text-gray-900 border-gray-900 border-b-8 hover:border-b-2 placeholder-gray-500 border-2 rounded-md"
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
                  data-testid="email-input"
                  className="mt-2 md:mt-0 mr-5 p-2 text-gray-900 border-gray-900 border-b-8 focus:border-b-2 placeholder-gray-500 border-2 rounded-md"
                />
                <input
                  type="password"
                  onChange={(e) =>
                    setAccountInfo({ ...accountInfo, password: e.target.value })
                  }
                  value={accountInfo.password}
                  placeholder="Password"
                  data-testid="password-input"
                  className="mt-2 md:mt-0 mr-5 p-2 text-gray-900 border-gray-900 border-b-8 focus:border-b-2 placeholder-gray-500 border-2 rounded-md"
                />
                <button
                  type="button"
                  data-testid="login-button"
                  className="mt-2 md:mt-0 mr-5 p-2 text-gray-900 border-gray-900 border-b-8 hover:border-b-2 transition-all delay-100   placeholder-gray-500 border-2 rounded-md"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    </header>

    // <header className="border-b-8 border-black text-white pt-4 pb-4">
    //   <div className="container mx-auto">
    //     <div className="flex flex-col md:flex-row justify-between items-center">

    //       <div className="right-side flex flex-wrap justify-end items-center w-full md:w-4/12">

    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
