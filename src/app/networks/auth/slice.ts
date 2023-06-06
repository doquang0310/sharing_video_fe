import { createSlice } from "@reduxjs/toolkit";
import { AuthStore } from "./type";
import { login, logout } from "./thunk";
import { Store } from "../../type";

const initialState: AuthStore = {
  isLoading: false,
  userInfo: {
    email: localStorage.getItem("email") || "",
    accessToken: localStorage.getItem("accessToken") || "",
  },
  isLogin:
    localStorage.getItem("email") != null &&
    localStorage.getItem("email")!.length > 0
      ? true
      : false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.type == "auth/LOGIN/fulfilled") {
        state.userInfo = action.payload.user;
        state.isLogin = true;
      }
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      if (action.type == "auth/LOGOUT/fulfilled") {
        state.isLogin = false;
        state.userInfo = {
          email: "",
          accessToken: "",
        }
      }
    });
  },
});

export const selectLoadingUser = (state: Store) => state.auth.isLoading;

export const selectUser = (state: Store) => state.auth.userInfo;

export const selectIsLogin = (state: Store) => state.auth.isLogin;

export default slice.reducer;
