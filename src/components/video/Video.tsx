import React, { useEffect } from "react";
import { validateYoutubeLink } from "../../ultils/regex";
import { getIdYoutube } from "../../ultils/youtube";

export interface VideoComponent {
  url: string;
}

export default function Video(props: VideoComponent) {
  const [showVideo, setShowVideo] = React.useState<boolean>(false);
  const [embedUrl, setEmbedUrl] = React.useState<string>("");

  const isAvailable = (url: string) => {
    return validateYoutubeLink(url);
  };

  useEffect(() => {
    const result = isAvailable(props.url);
    const videoId = getIdYoutube(props.url);
    setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
    return setShowVideo(result);
  },[props.url]);

  return (
    <React.Fragment>
      {showVideo == true ? (
        <iframe
          title="video"
          src={embedUrl}
          className="w-full aspect-video"
        ></iframe>
      ) : (
        <p className="block mb-1 text-red-500 font-semibold">This is not a youtube link, please check again 😯</p>
      )}
    </React.Fragment>
  );
}
