import { IBalanceState, IBalanceModel } from "../types/types";
import { computed } from "mobx";

export class BalanceModel implements IBalanceModel {
  constructor(
    private balanceState: IBalanceState,
    private settingsState: { currency: string } = { currency: "$" }
  ) {}
  @computed
  public get balanceWithCurrency(): string {
    return `${this.settingsState.currency}${this.balanceState.balance}`;
  }
}
