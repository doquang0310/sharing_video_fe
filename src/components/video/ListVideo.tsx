import React from "react";
import VideoInList from "./VideoInList";
import { demoData } from "../../ultils/demo-data";

export default function ListVideo() {
  return (
    <div className="w-4/5 mx-auto">
      {demoData.map((item : any, index : any) => {
        return <VideoInList data={item} key={`${index}-video-in-list`} />;
      })}
    </div>
  );
}
