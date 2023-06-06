import { configureStore } from "@reduxjs/toolkit";
import videos from "./videos/slice";
import auth from "./auth/slice";
import videoMiddleware from "./middleware/videoMiddleware";

const store = configureStore({
  reducer: {
    videos,
    auth,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([videoMiddleware])
  },
});

export default store;
