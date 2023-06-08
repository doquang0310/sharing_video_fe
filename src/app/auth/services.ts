import { LoginData } from "./type";
import axiosClient from "../../ultils/axiosClient";
import { ENDPOINT } from "../../ultils/endpoint";

const AuthService = {
  login: async (data: LoginData) => {
    return axiosClient.post(ENDPOINT.LOGIN, data);
  },
};

export default AuthService;
