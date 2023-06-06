
import { AuthStore } from "./auth/type";
import { VideoStore } from "./videos/type";

export interface Store {
    videos: VideoStore,
    auth: AuthStore
}