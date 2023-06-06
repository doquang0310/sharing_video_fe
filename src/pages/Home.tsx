import React from "react";

const ListVideo = React.lazy(() => import('../components/video/ListVideo'));

export default function Home() {
  return <ListVideo/>;
}
