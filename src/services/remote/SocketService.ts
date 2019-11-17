import { ISocketService } from "../../../types/types";

export class SocketService implements ISocketService {
  public send(data: any): boolean {
    console.log("send to socket " + data);
    return true;
  }
}
