import { CreateVideoRequest, FetchVideoRequest } from "./type";
import { getAuthorizationHeader } from "../../ultils/auth";
import axiosClient from "../../ultils/axiosClient";
import { ENDPOINT } from "../../ultils/endpoint";

const VideoService = {
  createVideo: async (data: CreateVideoRequest) => {
    const result = axiosClient.post(ENDPOINT.CREATE_VIDEO, data, {
      headers: getAuthorizationHeader(),
    });
    return result;
  },
  fetchVideos: async (params: FetchVideoRequest) => {
    return axiosClient.get(ENDPOINT.FETCH_VIDEOS, { params });
  },
};

export default VideoService;
