import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

export interface VideoInListProps {}

export default function VideoInList(props: any) {
  console.log(props);
  return (
    <div className="flex mt-3 mb-3">
      <div className="video w-full">
        <div className="video-container">
          <iframe
            title="video"
            src="https://www.youtube.com/embed/c0i88t0Kacs"
            className="w-full aspect-video"
          ></iframe>
        </div>
      </div>
      <div className="info ml-5">
        <h1 className="text-2xl font-bold">{props.data.title}</h1>
        <h3 className="text-xl ">Shared by: {props.data.share_by}</h3>

        <div className="flex justify-between w-1/6 mt-2">
          <button className="flex items-center">
            <AiFillLike className="text-xl" />
            <span className="ml-2">{props.data.upvote}</span>
          </button>
          <button className="flex items-center">
            <AiFillDislike className="text-xl" />
            <span className="ml-2">{props.data.downvote}</span>
          </button>
        </div>

        <p className="mt-2">{props.data.description}</p>
      </div>
    </div>
  );
}
