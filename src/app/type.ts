import { VideoStore } from "../components/video/store/type";
import { AuthStore } from "./networks/auth/type";

export interface Store {
    videos: VideoStore,
    auth: AuthStore
}