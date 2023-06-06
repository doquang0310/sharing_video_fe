import { configureStore } from "@reduxjs/toolkit";
import videos from "../components/video/store/slice";
import auth from "./networks/auth/slice";
import crashMiddleware from "./middleware/crashMiddleware";
import loggerMiddleware from "./middleware/loggerMiddleware";
import videoMiddleware from "./middleware/videoMiddleware";

const store = configureStore({
  reducer: {
    videos,
    auth,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([crashMiddleware, loggerMiddleware,videoMiddleware])
  },
});

export default store;
