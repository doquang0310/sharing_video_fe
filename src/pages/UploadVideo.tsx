import React, { useState } from "react";
import Video from "../components/video/Video";
import { validateYoutubeLink } from "../ultils/regex";
import { useDispatch } from "react-redux";
import { createVideo } from "../app/videos/thunk";

export default function UploadVideo() {
  const dispath = useDispatch();

  const [url, setUrl] = useState<string>("");

  const handleChangeUrl = (e: any) => {
    return setUrl(e.target.value);
  };

  const handleValidate = () => {
    if (url === "") {
      return;
    }
    const checkUrl = validateYoutubeLink(url);
    if (!checkUrl) {
      setUrl("");
      return alert("Url is not valid");
    }
  };

  const handleCreateVideo = async () => {
    console.log(url);
    if (url === "") {
      alert("Url is empty");
    }
    const checkUrl = validateYoutubeLink(url);
    if (!checkUrl) {
      setUrl("");
      return alert("Url is not valid");
    }
    const result = await dispath(createVideo({ url }) as any);

    return result;
  };

  return (
    <div className="w-full mx-auto mt-5" data-testid="upload-video">
      <div className="flex justify-between">
        <div className="w-2/6 items-start">
          <h1 className="text-3xl font-bold text-center">Create Video</h1>
          <div className="mt-5">
            <label
              htmlFor="url"
              className="block mb-1 text-gray-800 font-semibold"
            >
              Enter Url:
            </label>
            <input
              name="url"
              type="text"
              placeholder="https://www.youtube.com/watch?v=jQRo-vdjYd8&t=593s"
              onChange={handleChangeUrl}
              onBlur={handleValidate}
              data-testid="url-input"
              value={url}
              className="mr-5 p-2 text-gray-900 border-gray-900 border-b-4 placeholder-gray-500 border-2 rounded-md w-full"
            />
          </div>
          <button
            type="button"
            data-testid="create-video-button"
            className="mt-5 pt-2 pb-2 pl-10 pr-10 text-gray-900 border-gray-900 border-b-8 hover:border-b-2 transition-all delay-100 flex placeholder-gray-500 border-2 rounded-md"
            onClick={handleCreateVideo}
          >
            <svg
              viewBox="0 0 1000 1000"
              fill="currentColor"
              height="1em"
              width="1em"
              className="mr-2"
            >
              <path d="M499.75 74l260 244h-164v256h-190V318h-166l260-244m468 578c12 6.667 21 17.333 27 32 6 14.667 7 28 3 40l-28 154c-2.667 13.333-10 24.333-22 33-12 8.667-25.333 13-40 13h-816c-14.667 0-28-4.333-40-13s-19.333-19.667-22-33l-28-154c-6.667-32 4-56 32-72l158-108h98l-170 130h178c5.333 0 9.333 2.667 12 8l40 110h300l40-110c5.333-5.333 9.333-8 12-8h178l-170-130h98l160 108" />
            </svg>
            Upload
          </button>
        </div>
        <div className="w-3/5 flex items-center  flex-col">
          <h1 className="text-3xl font-bold mb-5">Preview</h1>
          <Video url={url} />
        </div>
      </div>
    </div>
  );
}
