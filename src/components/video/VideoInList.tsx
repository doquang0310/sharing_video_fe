import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { selectLoadingVideo } from "../../app/videos/slice";
import { InfoVideo } from "../../app/videos/type";
import Loader from "../common/Loader";
export interface PropsVideoInList {
  data: InfoVideo;
}

const Video = React.lazy(() => import("./Video"));

export default function VideoInList(props: PropsVideoInList) {
  const isLoading = useSelector(selectLoadingVideo);

  return (
    <div className={`flex mt-3 mb-3 ${isLoading && "animate-pulse"}`}>
      <div className="video w-2/4">
        <div className="video-container">
          <Suspense fallback={<Loader />}>
            <Video url={props.data.url} />
          </Suspense>
        </div>
      </div>
      <div className="info ml-5 w-2/4">
        <h1 className="text-2xl font-bold">{props.data.title}</h1>
        <h3 className="text-xl ">Shared by: {props.data.publishedBy.email}</h3>
        <p className="text-xl mt-2">Description:</p>
        <p className="mt-1">
          {props.data.description.slice(0, 150)}{" "}
          {props.data.description.length > 150 && "..."}
        </p>
      </div>
    </div>
  );
}
