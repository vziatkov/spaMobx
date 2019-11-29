import { ITotalBetState, ITotalBetModel } from "../types/types";

import { computed } from "mobx";

export class TotalBetModel implements ITotalBetModel {
  constructor(
    private totalBetState: ITotalBetState,
    private settingsState: { currency: string } = { currency: "$" }
  ) {}

  @computed
  public get totalBetWithCurrency(): string {
    return `${this.settingsState.currency}${this.totalBetState.totalBet}`;
  }
}
