import { CreateVideoRequest, FetchVideoRequest } from "./type";
import { getAuthorizationHeader } from "../../ultils/auth";
import axiosClient from "../../ultils/axiosClient";

const VideoService = {
  createVideo: async (data: CreateVideoRequest) => {
    const result = axiosClient.post("http://localhost:3000/videos", data, {
      headers: getAuthorizationHeader(),
    });
    return result;
  },
  fetchVideos: async (params: FetchVideoRequest) => {
    return axiosClient.get("http://localhost:3000/videos", { params });
  },
};

export default VideoService;
