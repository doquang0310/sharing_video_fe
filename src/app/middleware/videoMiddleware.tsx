import { Middleware } from "redux";
import videoSocket from "../../websocket/video.websocket";
import { InfoVideo } from "../videos/type";
import { videoActions } from "../videos/slice";

const videoMiddleware: Middleware = (store) => (next) => (action) => {
  try {
    if (action.type === "videos/startConnecting") {
      videoSocket.connect("http://localhost:3000");
      videoSocket.on("videos", (data: InfoVideo) => {
        store.dispatch(
          videoActions.setNotification({ isShow: true, video: data })
        );
      });
    }

    if (action.type === "videos/stopConnecting") {
      videoSocket.disconnect();
    }
    return next(action);
  } catch (error) {
    console.error("Caught an exception!", error);
    throw error;
  }
};

export default videoMiddleware;
