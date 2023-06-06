export interface LoginData {
    email: string;
    password: string;
}

export interface AuthStore {
    isLoading : boolean;
    userInfo : UserInfo;
    isLogin : boolean;
}

export interface UserInfo {
    email : string;
    accessToken : string;
}