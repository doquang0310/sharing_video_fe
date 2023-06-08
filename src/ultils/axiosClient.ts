import axios, { AxiosResponse } from "axios";
import { StatusCodeResponse } from "./constants";
import { saveUserToLocalStorage } from "./auth";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  responseType: "json",
  timeout: 30000,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response.status === StatusCodeResponse.UNAUTHORIZED) {
      saveUserToLocalStorage({ email: "", accessToken: "" });
      alert("Your session has expired, please login again");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default instance;
