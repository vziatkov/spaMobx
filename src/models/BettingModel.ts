import {
  IBetState,
  IBalanceState,
  ITotalBetState,
  IBettingModel
} from "../types/types";
import { computed } from "mobx";

export class BettingModel implements IBettingModel {
  constructor(
    private betState: IBetState,
    private balanceState: IBalanceState,
    private totalBetState: ITotalBetState,
    private betLimitsState: { maxBet: number } = { maxBet: 10 },
    private betValueState: { betValue: number } = { betValue: 1 }
  ) {}

  @computed
  public get canPlaceBet(): boolean {
    return (
      this.betLimitsState.maxBet >=
        this.betValueState.betValue + this.totalBetState.totalBet &&
      this.balanceState.balance >= this.betValueState.betValue
    );
  }
}
