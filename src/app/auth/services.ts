import { LoginData } from "./type";
import axiosClient from "../../ultils/axiosClient";
import { ENDPOINT } from "../../ultils/endpoint";

const AuthService = {
  login: async (data: LoginData) => {
    const result = await axiosClient.post(ENDPOINT.LOGIN, data);
    return result;
  },
};

export default AuthService;
