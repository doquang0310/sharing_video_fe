import React, { Suspense } from "react";

const ListVideo = React.lazy(() => import("../components/video/ListVideo"));

export default function Home() {
  return (
    <Suspense>
      <ListVideo />
    </Suspense>
  );
}
