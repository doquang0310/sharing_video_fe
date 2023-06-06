export interface CreateVideoRequest {
  url: string;
}

export interface FetchVideoRequest {
  page: number;
  limit: number;
}

export interface InfoVideo {
  title: string;
  description: string;
  url: string;
  publishedBy: {
    email: string;
  };
}

export interface NotificationData {
  video : InfoVideo,
  isShow : boolean
}

export interface VideoStore {
  listVideos: InfoVideo[];
  newVideos: InfoVideo[];
  isLoading: boolean;
  isEstablishingConnection: boolean;
  isConnected: boolean;
  notificationData: NotificationData;
}
