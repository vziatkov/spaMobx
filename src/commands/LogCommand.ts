import { ICommand, ISocketService, BetType } from "../types/types";

export class LogCommand implements ICommand<any, void> {
  constructor(
    private command: ICommand<any, any>,
    private betType: BetType,
    private socketService: ISocketService
  ) {}
  public execute(params): void {
    this.socketService.send("send log " + this.betType);
    this.command.execute(params);
  }
}
