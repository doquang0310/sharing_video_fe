import { LoginData } from "./type";
import axiosClient from "../../ultils/axiosClient";

const AuthService = {
  login: async (data: LoginData) => {
    return axiosClient.post("http://localhost:3000/auth/login", data);
  },
};

export default AuthService;
