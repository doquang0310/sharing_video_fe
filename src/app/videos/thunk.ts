import { createAsyncThunk } from "@reduxjs/toolkit";

import { StatusCodeResponse } from "../../ultils/constants";
import VideoService from "./services";
import { CreateVideoRequest, FetchVideoRequest } from "./type";

export const createVideo = createAsyncThunk(
  "videos/CREATE_VIDEO",
  async (params: CreateVideoRequest, { rejectWithValue , dispatch }) => {
    const res = await VideoService.createVideo(params);

    if (res.status === StatusCodeResponse.CREATED) {
      alert("Create Video Success");
      return res.data;
    }

    return rejectWithValue(res.status);
  }
);

export const fetchVideos = createAsyncThunk(
  "videos/FETCH_VIDEOS",
  async (params: FetchVideoRequest, { rejectWithValue , dispatch }) => {
    dispatch({type : "videos/setLoading",payload : true});
    const res = await VideoService.fetchVideos(params);
    dispatch({type : "videos/setLoading",payload : false});
    if (res.status === StatusCodeResponse.SUCCESS) {
      return res.data?.data;
    }

    return rejectWithValue(res.status);
  }
);
