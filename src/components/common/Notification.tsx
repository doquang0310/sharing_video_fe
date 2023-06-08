import React, { Suspense, useEffect } from "react";
import VideoInList from "../video/VideoInList";
import { useSelector } from "react-redux";
import { selectNotification } from "../../app/videos/slice";
import { InfoVideo } from "../../app/videos/type";
import Loader from "./Loader";

export default function Notification() {
  const [show, setShow] = React.useState(true);
  const [video, setVideo] = React.useState<InfoVideo>({
    title: "",
    description: "",
    url: "",
    publishedBy: {
      email: "",
    },
  });
  const data = useSelector(selectNotification);

  useEffect(() => {
    setShow(data.isShow);
    setVideo(data.video);
  }, [data]);

  const closeNotification = () => {
    setShow(false);
  };

  return (
    <div
      className={
        show == true
          ? "fixed w-[100vw] h-[100vh] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 backdrop-blur-[1.5px]"
          : "hidden"
      }
    >
      <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 pt-10 pb-10 flex w-full justify-center items-center bg-gray-300/75 z-[9999]">
        <div className="w-full md:w-3/5">
          <h1 className="text-gray-800 text-3xl text-center mb-10">
            NEW VIDEO !!!!
          </h1>
          <Suspense fallback={<Loader />}>
            <VideoInList data={video} />
          </Suspense>
          <div className="h-[50px] flex justify-center mt-10">
            <button
              type="button"
              className="mr-5 pt-2 pb-2 pl-10 pr-10 text-gray-900 border-gray-900 border-b-8 hover:border-b-2 transition-all delay-100   placeholder-gray-500 border-2 rounded-md"
              onClick={closeNotification}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
