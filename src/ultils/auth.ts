import { UserInfo } from "../app/networks/auth/type";

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const getAuthorizationHeader = () => {
  return {
    Authorization: `Bearer ${getAccessToken()}`,
  };
};

export const saveUserToLocalStorage = (user: UserInfo) => {
  localStorage.setItem("accessToken", user.accessToken);
  localStorage.setItem("email", user.email);
}