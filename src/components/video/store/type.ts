export interface InfoVideo {
  title: string;
  description: string;
  url: string;
  publishedBy: {
    email: string;
  };
}

export interface VideoStore {
  listVideos: InfoVideo[];
  newVideos: InfoVideo[];
  isLoading: boolean;
  isEstablishingConnection: boolean;
  isConnected: boolean;
}
