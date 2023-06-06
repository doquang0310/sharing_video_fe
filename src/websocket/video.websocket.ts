

import { Socket, io } from "socket.io-client";

class VideoSocket {
  socket: Socket | null;

  constructor() {
    this.socket = null;
  }

  connect(url: string | URL) {
    if (!this.socket) {
      this.socket = io(url);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  on(eventName: any, callback: any) {
    if (this.socket) {
      this.socket.on(eventName, callback);
    }
  }
}
const videoSocket = new VideoSocket();

export default videoSocket;