import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../app/networks/videos/thunk";
import { selectVideos } from "./store/slice";
import { InfoVideo } from "./store/type";
import { FetchVideoRequest } from "../../app/networks/videos/type";

const VideoInList = React.lazy(() => import('./VideoInList'));

export default function ListVideo() {
  const dispatch = useDispatch();
  const [param, setParam] = React.useState<FetchVideoRequest>({
    page : 1,
    limit : 15,
  }) ;

  useEffect(() => {
    dispatch(fetchVideos(param) as any)
  },[param])

  const selectVideo : InfoVideo[] = useSelector(selectVideos);

  return (
    <div className="w-4/5 mx-auto">
      {selectVideo && selectVideo?.map((item : InfoVideo, index : number) => {
        return <VideoInList data={item} key={`${index}-video-in-list`} />;
      })}
    </div>
  );
}
