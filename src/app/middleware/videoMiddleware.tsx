import { Middleware } from "redux";
import { Socket, io } from "socket.io-client";
import { InfoVideo } from "../../components/video/store/type";
import videoSocket from "../../websocket/video.websocket";

const videoMiddleware: Middleware = (store) => (next) => (action) => {
  try {
    if (action.type == "videos/startConnecting") {
      videoSocket.connect('http://localhost:3000');
      videoSocket.on("videos", (data: InfoVideo) => {
        console.log(data);
      });
    }

    if (action.type == "videos/stopConnecting") {
      videoSocket.disconnect();
    }
    return next(action);
  } catch (error) {
    console.error("Caught an exception!", error);
    throw error;
  }
};

export default videoMiddleware;
