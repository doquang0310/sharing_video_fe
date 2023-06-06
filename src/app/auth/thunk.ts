import { createAsyncThunk } from "@reduxjs/toolkit";

import { StatusCodeResponse } from "../../ultils/constants";
import AuthService from "./services";
import { LoginData } from "./type";
import { saveUserToLocalStorage } from "../../ultils/auth";
import { videoActions } from "../videos/slice";

export const login = createAsyncThunk(
  "auth/LOGIN",
  async (params: LoginData, { rejectWithValue, dispatch }) => {
    dispatch({ type: "auth/setLoading", payload: true });
    const res = await AuthService.login(params);
    if (res.status === StatusCodeResponse.SUCCESS) {
      saveUserToLocalStorage(res.data?.data.user);
      dispatch(videoActions.startConnecting())
      return res.data?.data;
    }

    return rejectWithValue(res.status);
  }
);

export const logout = createAsyncThunk(
  "auth/LOGOUT",
  async (_, { rejectWithValue, dispatch }) => {
    saveUserToLocalStorage({email : "",accessToken : ""})
    dispatch(videoActions.stopConnecting())

    return false;
  }
);
