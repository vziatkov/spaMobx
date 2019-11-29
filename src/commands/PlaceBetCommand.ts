import {
  ICommand,
  IBetState,
  IBalanceState,
  ITotalBetState,
  IPlaySoundService
} from "../types/types";
import { action } from "mobx";

type executeParams = { soundName: string };

export class PlaceBetCommand implements ICommand<executeParams, void> {
  constructor(
    private betState: Pick<IBetState, "bet">,
    private totalBetState: Pick<ITotalBetState, "totalBet">,
    private balanceState: Pick<IBalanceState, "balance">,
    private betValueState: { betValue: number },
    private soundService: Pick<IPlaySoundService, "playSound">
  ) {}
  @action
  public execute(args: executeParams): void {
    this.betState.bet += this.betValueState.betValue;
    this.balanceState.balance -= this.betValueState.betValue;
    this.totalBetState.totalBet += this.betValueState.betValue;
    this.soundService.playSound(args.soundName);
  }
}
