import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../app/videos/thunk";
import { selectVideos } from "../../app/videos/slice";
import { FetchVideoRequest, InfoVideo } from "../../app/videos/type";
import Loader from "../common/Loader";

const VideoInList = React.lazy(() => import("./VideoInList"));

export default function ListVideo() {
  const dispatch = useDispatch();
  const [param, _] = React.useState<FetchVideoRequest>({
    page: 1,
    limit: 15,
  });

  useEffect(() => {
    dispatch(fetchVideos(param) as any);
  }, [param]);

  const selectVideo: InfoVideo[] = useSelector(selectVideos);

  return (
    <div className="md:w-full xl:w-4/5 mx-auto">
      {selectVideo &&
        selectVideo?.map((item: InfoVideo, index: number) => {
          return (
            <Suspense fallback={<Loader />} key={`${index}-video-in-list`}>
              <VideoInList data={item} />
            </Suspense>
          );
        })}
    </div>
  );
}
