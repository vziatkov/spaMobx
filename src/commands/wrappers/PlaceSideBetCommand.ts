import { ICommand } from "../../types/types";

export class PlaceSideBetCommand
  implements ICommand<{ soundName: string }, void> {
  constructor(private baseCommand: ICommand<{ soundName: string }, void>) {}
  public execute(params: { soundName: string }): void {
    console.log("Here custom logic for sideBet before base command");
    this.baseCommand.execute(params);
    console.log("Here custom logic for sideBet after base command");
  }
}
