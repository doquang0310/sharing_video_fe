import { createSlice } from "@reduxjs/toolkit";
import { createVideo, fetchVideos } from "./thunk";
import { Store } from "../type";
import { InfoVideo, VideoStore } from "./type";

const initialState: VideoStore = {
  listVideos: [] as InfoVideo[],
  newVideos: [] as InfoVideo[],
  isLoading: true,
  isEstablishingConnection: false,
  isConnected: false,
  notificationData: {
    video: {
      title: "",
      description: "",
      url: "",
      publishedBy: {
        email: "",
      },
    },
    isShow: false,
  },
};

const slice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setNotification: (
      state,
      action: { payload: { isShow: boolean; video: InfoVideo } }
    ) => {
      state.notificationData = action.payload;
    },
    startConnecting: (state) => {
      state.isEstablishingConnection = true;
    },
    stopConnecting: (state) => {
      state.isEstablishingConnection = false;
    },
    connectionEstablished: (state) => {
      state.isConnected = true;
      state.isEstablishingConnection = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      createVideo.fulfilled,
      (state, action: { payload: InfoVideo }) => {
        state.newVideos = [...state.newVideos, action.payload];
      }
    );

    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.listVideos = action.payload;
    });
  },
});

export const selectVideos = (state: Store) => [
  ...state.videos.newVideos,
  ...state.videos.listVideos,
];

export const selectLoadingVideo = (state: Store) => state.videos.isLoading;

export const selectNotification = (state: Store) =>
  state.videos.notificationData;

export const videoActions = slice.actions;

export default slice.reducer;
