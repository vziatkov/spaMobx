import { IBalanceModel } from "../types/types";
import { action, observable, computed } from "mobx";

export class BalanceModel implements IBalanceModel {
  @observable
  private balance: number = 0;
  constructor(value: number) {
    this.balance = value;
  }

  @action
  public reduceBalance(value: number): void {
    if (this.balance >= value) {
      this.balance -= value;
    }
  }
  @computed
  public get balanceValue(): number {
    return this.balance;
  }
}
