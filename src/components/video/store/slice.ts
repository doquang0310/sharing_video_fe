import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InfoVideo } from "./type";
import { createVideo, fetchVideos } from "../../../app/networks/videos/thunk";
import { Store } from "../../../app/type";

const initialState = {
  listVideos: [] as InfoVideo[],
  newVideos: [] as InfoVideo[],
  isLoading: true,
  isEstablishingConnection: false,
  isConnected: false,
};

const slice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    startConnecting: (state => {
      state.isEstablishingConnection = true;
    }),
    stopConnecting : (state => {
      state.isEstablishingConnection = false;
    }),
    connectionEstablished: (state => {
      state.isConnected = true;
      state.isEstablishingConnection = true;
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(createVideo.fulfilled, (state, action) => {
      state.newVideos = [...state.newVideos, action.payload];
    });

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

export const videoActions = slice.actions;

export default slice.reducer;
